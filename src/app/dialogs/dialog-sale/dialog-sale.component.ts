import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

import { SaleService } from '../../home/sale/sale.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ItemsService } from 'src/app/home/items/items.service';


@Component({
  selector: 'app-dialog-sale',
  templateUrl: './dialog-sale.component.html'
})
export class DialogSaleComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  adress;
  items;
  progress;

  constructor(
    private ss: SaleService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getDets();
    this.defineProgress();
  }

  private defineProgress() {
    switch (this.data.progresso) {
      case "cancelado":
        this.progress = 1;
        break;
      case "producao":
        this.progress = 2;
        break;
      case "despachado":
        this.progress = 3;
        break;
      case "entregue":
        this.progress = 4;
        break;
      default:
        this.progress = 2;
        break;
    }
  }

  getDets() {
    this.ss.getAdress(this.dado.id_empresa, this.data.endereco).subscribe(ret => {
      this.adress = ret[0];
    });

    this.ss.getItems(this.dado.id_empresa, this.data.id_venda).subscribe(ret => {
      this.items = ret[0];
    });
  }

  upProgress() {
    this.ss.update_order(this.dado.id_empresa, this.data, this.progress).subscribe(ret => {
      if(ret['E'])
        alert(ret['E']);
      else
        alert(ret['S']);
    })
  }

  delItem(item) {
    this.dialog.open(DialogConfirmComponent, {
      data: 0
    }).afterClosed().subscribe(ret => {
      if (ret == 1) {
        this.ss.remove_item_order(this.dado.id_empresa, this.data.id_venda, item).subscribe(ret => {
          if (ret.E)
            alert(ret.E);
          else
            this.ngOnInit();
        })  
      }
    })
  }

  addItem() {
    this.dialog.open(DialogAddItemSaleComponent, {
      width: '500px',
      data: this.data
    }).afterClosed().subscribe(ret => this.ngOnInit())
  }
}



@Component({
  selector: 'app-dialog-add-item-sale',
  templateUrl: './dialog-add-item-sale.component.html'
})
export class DialogAddItemSaleComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  itemCtrl =  new FormControl('');
  itemsList;
  total = 0;
  err;

  @ViewChild('itemInput') itemInput: ElementRef<HTMLInputElement>;


  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  itens: any[] = [];
  
  constructor(
    private ss: SaleService,
    private s_i: ItemsService,
    public dialogRef: MatDialogRef<DialogAddItemSaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }

  ngOnInit(): void {
    this.itemCtrl.valueChanges.subscribe(ret => {
      if(ret)
        this.getItems(ret);
    })
  }

  getItems(q) {
    this.s_i.search(q, this.dado.id_empresa, 50, null).subscribe(ret => {
      this.itemsList = ret[1];
    })
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

  onSubmit() {
    this.ss.add_item_order(this.dado.id_empresa, this.data.id_venda, this.itens).subscribe(ret3 => {
      let i;
      ret3.forEach(element => {
        if (element.E)
          i = 1;
      });
        if (i > 0)
          alert('Erro ocorreu!');
        else {
          alert('Itens adicionados!');
          this.dialogRef.close();
        }
    })
  }
}
