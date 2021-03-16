import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StockService } from '../../home/stock/stock.service';


interface ProviderData {
  nome: string,
  email: string,
  fone: string
}

@Component({
  selector: 'app-dialog-provider',
  templateUrl: './dialog-provider.component.html'
})
export class DialogProviderComponent {
  nome: string;
  fone: string;
  email: string;
  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    public dialogRef: MatDialogRef<DialogProviderComponent>,
    public ss: StockService
  ) { }

  onSubmit() {
    this.ss.postProv(this.dado.id_empresa, {
      nome: this.nome,
      fone: this.fone,
      email: this.email
    }).subscribe(ret => {
      if (ret.E)
        this.err = ret.E
      else
        this.dialogRef.close()
    })
  }
}

@Component({
  selector: 'app-dialog-provider-edit',
  templateUrl: './dialog-provider-edit.component.html'
})
export class DialogProviderEditComponent {
  err;
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    public dialogRef: MatDialogRef<DialogProviderEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProviderData,
    private is: StockService
  ) { }

  onSubmit() {
    this.is.upProv(this.dado.id_empresa, this.data).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }

}