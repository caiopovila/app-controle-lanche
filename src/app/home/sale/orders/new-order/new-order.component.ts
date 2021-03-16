import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { ClientService } from '../../../client/client.service';
import { ItemsService } from '../../../items/items.service';
import { SaleService } from '../../sale.service';
import { DialogAdressComponent } from '../../../../dialogs/dialog-adress/dialog-adress.component';
import { DialogClientComponent } from '../../../../dialogs/dialog-client/dialog-client.component';


@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit, OnDestroy {
  dado = JSON.parse(sessionStorage.getItem('user'));

  client = new FormControl('');
  itemCtrl =  new FormControl('');
  cl;
  adr;
  cli_list;
  itemsList;
  total = 0;
  adressSelect;
  err;

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itens: any[] = [];

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;

  constructor(
    private s_c: ClientService,
    private s_i: ItemsService,
    private s_o: SaleService,
    private dialog: MatDialog
  ) { }

  ngOnDestroy(): void {
    this.adr = null; 
    this.adressSelect = null;
    this.cl = null;
    this.cli_list = null;
    this.itens = null;
    this.itemsList = null;
    this.client.setValue(null);
    this.itemCtrl.setValue(null);
    this.itemInput.nativeElement.value = '';
    this.total = 0;
  }
  
  ngOnInit(): void {
    this.client.valueChanges.subscribe(ret => {
      if (ret)
        this.get_input(ret)
    });
    this.itemCtrl.valueChanges.subscribe(ret => {
      if(ret)
        this.getItems(ret);
    })
  }

  get_input(cli): void {
    this.s_c.search(cli, this.dado.id_empresa, null, null).subscribe(ret => {
      this.cli_list = ret[1];
    })
  }

  getItems(q) {
    this.s_i.search(q, this.dado.id_empresa, 50, null).subscribe(ret => {
      this.itemsList = ret[1];
    })
  }

  getAdress() {
    this.s_c.getListAdress(this.dado.id_empresa, this.client.value).subscribe(ret => this.adr = ret[0]);
    this.cli_list.forEach(element => {
      if(element.id_cliente == this.client.value)
        this.cl = element
    });
  }

  openDialogEnd() {
    this.dialog.open(DialogAdressComponent, {
      data: this.client.value
    }).afterClosed().subscribe(ret => {
      this.getAdress();
    })
  }
  
  openDialog() {
    this.dialog.open(DialogClientComponent).afterClosed().subscribe(ret => {
      this.client.setValue('');
    });
  }

  remove(id: number): void {
    let i;

    this.itens.forEach((ret, index) => {
      if (ret.id_item == id) {
        i = index
      }
    });

    if(i >= 0)
      this.itens.splice(i, 1);

    this.total = 0;
    this.itens.forEach(ret => this.total += ret.preco);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    if (event.option.value.id_item)
      this.itens.push(event.option.value);

    this.itemInput.nativeElement.value = '';
    this.itemCtrl.setValue(null);

    this.total = 0;
    this.itens.forEach(ret => this.total += ret.preco);
  }

  getEnd(adrs): void {
    this.adressSelect = adrs;
  }

  sendOrder(fre) {
    this.s_o.register_order(this.dado.id_empresa, {
      cliente: this.cl.id_cliente,
      endereco: this.adressSelect.id_endereco,
      desconto: 0,
      frete: fre,
    }).subscribe(ret => {
      if (ret.id_venda) {
        this.s_o.add_item_order(this.dado.id_empresa, ret.id_venda, this.itens).subscribe(ret3 => {
          let i;
          ret3.forEach((element, index) => {
            if (element.E)
              i = index;
          });
          if (i >= 0)
            alert(`Erro ocorreu em ${this.itens[i].nome}`);
          else {
            alert('Pedido feito!');
            this.ngOnDestroy();
          }
        })
      } else
      if (ret['E'])
        this.err = ret['E'];
    })
  }
}
