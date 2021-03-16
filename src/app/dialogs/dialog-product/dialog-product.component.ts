import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { StockService } from '../../home/stock/stock.service';

interface ProductData {
  produto: string,
  id_produto: number,
  marca: string,
  preco_unitario: number,
  id_estoque: number,
  peso_unitario: number,
  quantidade: number,
  id_fornecedor: number
}

@Component({
  selector: 'app-dialog-product',
  templateUrl: './dialog-product.component.html'
})
export class DialogProductComponent {

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  produto: string;
  marca: string;
  preco: number
  quantidade: number;
  peso: number;
  fornecedor: number;

  listProvider;
  err;

  constructor(
    private is: StockService,
    private di: MatDialog
  ) {
    this.is.getListProvs(this.dado.id_empresa, 1000, null).subscribe(ret => {
      if (ret[1])
        this.listProvider = ret[1];
    });
   }

  onSubmit() {
    this.is.postProd(this.dado.id_empresa, {
      product: {
        produto: this.produto,
        marca: this.marca,
        preco: this.preco
      },
      stock: {
        quantidade: this.quantidade,
        peso: this.peso,
        id_fornecedor: this.fornecedor
      }
    }).subscribe(ret => {
      if (ret.E) {
        this.err = ret.E;
      } else
      if (ret[0].id_produto)
        this.di.closeAll();
    })
  }
}



@Component({
  selector: 'app-dialog-product-edit',
  templateUrl: './dialog-product-edit.component.html'
})
export class DialogProductEditComponent {

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  listProvider;
  err;


  constructor(
    public dialogRef: MatDialogRef<DialogProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductData,
    private is: StockService
  ) {
    this.is.getListProvs(this.dado.id_empresa, 1000, null).subscribe(ret => {
      if (ret[1])
        this.listProvider = ret[1];
    })
   }

  onSubmit() {
    this.is.upProd(this.dado.id_empresa, {
      product: {
        id_produto: this.data.id_produto,
        produto: this.data.produto,
        marca: this.data.marca,
        preco: this.data.preco_unitario
      },
      stock: {
        id_produto: this.data.id_produto,
        id_estoque: this.data.id_estoque,
        quantidade: this.data.quantidade,
        peso: this.data.peso_unitario,
        id_fornecedor: this.data.id_fornecedor
      }
    }).subscribe(ret => {
      if (ret.E) {
        this.err = ret.E;
      } else
      if (ret[0].S)
        this.dialogRef.close();
    })
  }
}
