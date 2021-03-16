import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ClientService } from '../../home/client/client.service';

@Component({
  selector: 'app-dialog-adress',
  templateUrl: './dialog-adress.component.html'
})
export class DialogAdressComponent {
  rua;
  numero;
  bairro;
  cidade;
  cep;
  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    public dialogRef: MatDialogRef<DialogAdressComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,
    private is: ClientService
  ) { }

  onSubmit() {
    this.is.postAdressClient(this.dado.id_empresa, {
     rua : this.rua,
     numero : this.numero,
     bairro : this.bairro,
     cidade : this.cidade,
     cep : this.cep
    }, this.data).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }
}
