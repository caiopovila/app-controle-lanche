import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { InfoService } from '../../home/config/busi-info/info.service';

@Component({
  selector: 'app-dialog-info-business',
  templateUrl: './dialog-info-business.component.html'
})
export class DialogInfoBusinessComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'));
  err;

  constructor(
    public dialogRef: MatDialogRef<DialogInfoBusinessComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private s_i: InfoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.s_i.upInfo(this.dado.id_empresa, this.data).subscribe(ret => {
      if(ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }
}

@Component({
  selector: 'app-dialog-new-adress-business',
  templateUrl: './dialog-new-adress-business.component.html'
})
export class DialogNewAdressBusinessComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'));
  rua;
  numero;
  bairro;
  cidade;
  cep;
  err;
  
  constructor(
    public dialogRef: MatDialogRef<DialogInfoBusinessComponent>,
    private s_i: InfoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.s_i.postAdress(this.dado.id_empresa, {
      rua : this.rua,
      numero : this.numero,
      bairro : this.bairro,
      cidade : this.cidade,
      cep : this.cep
     }).subscribe(ret => {
      if(ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }
}


@Component({
  selector: 'app-dialog-up-adress-business',
  templateUrl: './dialog-up-adress-business.component.html'
})
export class DialogUpAdressBusinessComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'));
  err;

  constructor(
    public dialogRef: MatDialogRef<DialogInfoBusinessComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private s_i: InfoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.s_i.putAdress(this.dado.id_empresa, this.data).subscribe(ret => {
      if(ret.E)
        this.err = ret.E;
      else
        this.dialogRef.close();
    })
  }
}