import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ItemsService } from '../../home/items/items.service';
import { StockService } from '../../home/stock/stock.service';

@Component({
  selector: 'app-dialog-item',
  templateUrl: './dialog-item.component.html'
})
export class DialogItemComponent {
  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  listProd;
  nome;
  desc;
  preco;
  produtos = [];
  quant = [];
  err;

  constructor(
    private ps: StockService,
    private it: ItemsService, 
    private di: MatDialog
  ) {
      this.ps.getListProds(this.dado.id_empresa, 1000, null).subscribe(ret => {
        if (ret[1])
          this.listProd = ret[1];
      })
   }

  onSubmit() {
    let prods = [];
    for (let i = 0; i <= this.produtos.length - 1; i++) {
      if (this.quant[i] != null)
        prods.push({id_produto: this.produtos[i], quantidade: this.quant[i]});
      else
        return this.err = 'Erro, valores não podem ser nulos!';
    }
    this.it.postItem(this.dado.id_empresa, {
      nome: this.nome,
      descricao: this.desc,
      preco: this.preco
    }).subscribe((ret) => {
      if (ret.E) {
        this.err = ret.E;
      } else
      if (ret.id_item && prods.length > 0) {
        this.it.postProdsItem(this.dado.id_empresa, prods, ret.id_item).subscribe(ret2 => {
          if (ret2.E) {
            this.err = ret2.E;
          } else
          if (ret2[0].S)
            this.di.closeAll();
        })
      } else {
        this.di.closeAll();
      }
    })
  }
}


@Component({
  selector: 'app-dialog-item-prod',
  templateUrl: './dialog-item-prod.component.html'
})
export class DialogItemProdComponent {
  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  listProd;
  produtos = [];
  quant = [];
  err;

  constructor(
      private route: ActivatedRoute,
      private it: ItemsService,
      private ps: StockService,
      private di: MatDialog
  ) {
    this.ps.getListProds(this.dado.id_empresa, 1000, null).subscribe(ret => {
      if (ret[1])
        this.listProd = ret[1];
    })
   }

  onSubmit() {
    let prods = [];
    for (let i = 0; i <= this.produtos.length - 1; i++) {
      if (this.quant[i] != null)
        prods.push({id_produto: this.produtos[i], quantidade: this.quant[i]});
      else
        return this.err = 'Erro, valores não podem ser nulos!';
    }
    let id = this.route.snapshot.root.children[0].children[0].children[0].params.idItem;
    this.it.postProdsItem(this.dado.id_empresa, prods, id).subscribe(ret2 => {
      if (ret2.E) {
        this.err = ret2.E;
      } else
      if (ret2[0].S)
        this.di.closeAll();
    })
  }
}