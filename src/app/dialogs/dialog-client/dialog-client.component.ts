import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { ClientService } from '../../home/client/client.service';

import { DialogAdressComponent } from '../dialog-adress/dialog-adress.component';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';


export interface ClientData {
  nome: string,
  email: string,
  fone: string,
  id_cliente: number
}


@Component({
  selector: 'app-dialog-client',
  templateUrl: './dialog-client.component.html'
})
export class DialogClientComponent {
  nome: string;
  fone: string;
  email: string;
  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    public dialogRef: MatDialogRef<DialogClientComponent>,
    public ss: ClientService
  ) { }

  onSubmit() {
    this.ss.postClient(this.dado.id_empresa, {
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
  selector: 'app-dialog-client-edit',
  templateUrl: './dialog-client-edit.component.html'
})
export class DialogClientEditComponent {
  err;
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    public dialogRef: MatDialogRef<DialogClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientData,
    private is: ClientService
  ) { }

  onSubmit() {
    this.is.upClient(this.dado.id_empresa, this.data).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }
}


@Component({
  selector: 'app-dialog-client-end',
  templateUrl: './dialog-client-end.component.html'
})
export class DialogClientEndComponent {
  err;
  ends;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DialogClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClientData,
    private is: ClientService
  ) { 
    this.getends();
   }

  getends() {
    this.is.getListAdress(this.dado.id_empresa, this.data.id_cliente).subscribe(ret => {
      if (ret[0])
        this.ends = ret[0];
    })
  }

  openDialogEnd() {
    this.dialog.open(DialogAdressComponent, {
      data: this.data.id_cliente
    }).afterClosed().subscribe(ret => {
      this.getends();
    })
  }

  delEnd(adr) {
    this.dialog.open(DialogConfirmComponent, {
      data: 0
    }).afterClosed().subscribe(ret => {
      if (ret == 1) {
        this.is.delEndClient(this.dado.id_empresa, this.data.id_cliente, adr).subscribe(ret => {
          if (ret.E)
            alert(ret.E);
          else
            this.getends();
        })  
      }
    })
  }
}