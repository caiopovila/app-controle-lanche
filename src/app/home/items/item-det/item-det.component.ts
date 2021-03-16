import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { ItemsService } from '../items.service';
import { DialogItemProdComponent } from '../../../dialogs/dialog-item/dialog-item.component';
import { DialogConfirmComponent } from '../../../dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-item-det',
  templateUrl: './item-det.component.html',
  styleUrls: ['./item-det.component.css']
})
export class ItemDetComponent implements OnInit {
  item: any;
  items: any;
  breakpoint: number;
  list_prod;
  isActive = false;
  nome;
  desc;
  preco;
  id; 
  erro;
  
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private route: ActivatedRoute,
    private rot: Router,
    private it: ItemsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.erro = '';
    this.breakpoint = (window.innerWidth <= 890) ? 1 : 2;
    this.list_prod = [];
    this.id = this.route.snapshot.paramMap.get('idItem');
    this.it.getDet(this.dado.id_empresa, this.id).subscribe((ret: any[]) => {
      if (!ret[0]) {
        this.rot.navigate(['./inicio/itens']);
      } else {
        this.item = ret[0];
        this.nome = ret[0].item;
        this.desc = ret[0].descricao;
        this.preco = ret[0].preco;
        this.items = ret;
      }
    }); 
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 890) ? 1 : 2;
  }

  openDialogDet() {
    let d = this.dialog.open(DialogItemProdComponent);
    d.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  sendInfo() {
    this.it.putItem(this.dado.id_empresa, {
      nome: this.nome,
      descricao: this.desc,
      preco: this.preco
    }, this.id).subscribe(ret => {
      if (ret.E)
        this.erro = ret.E;
      if (ret.S)
        this.ngOnInit();
    })
  }

  delProds() {
    let d = this.dialog.open(DialogConfirmComponent, {
      data: '0'
    });

    d.afterClosed().subscribe(result => {
      if (result == 1)
        this.it.delProdsItem(this.dado.id_empresa, this.list_prod, this.id).subscribe(ret => {
          if (ret.E)
            alert(ret.E);
          else
          ret.forEach(element => {
            if (element.E)
              alert('Um erro ocorreu!');
          });

            this.ngOnInit();      
        })
    });

  }

  delItem() {
    let d = this.dialog.open(DialogConfirmComponent, {
      data: '0'
    });

    d.afterClosed().subscribe(result => {
      if (result == 1)
        this.it.delItem(this.dado.id_empresa, this.id).subscribe(ret => {
          if (ret.E)
            alert(ret.E);
        if (ret.S)
          this.ngOnInit();
        })
    });
  }
}
