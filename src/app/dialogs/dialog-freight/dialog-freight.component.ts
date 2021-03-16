import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FreightService } from '../../home/sale/orders/freight/freight.service';

@Component({
  selector: 'app-dialog-freight',
  templateUrl: './dialog-freight.component.html'
})
export class DialogFreightComponent implements OnInit {
  err;
  dado = JSON.parse(sessionStorage.getItem('user'));
  preco;

  constructor(
    private dialog: MatDialogRef<DialogFreightComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private s_f: FreightService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.s_f.postFreight(this.dado.id_empresa, { bairro: this.data.bairro, cidade: this.data.cidade, preco: this.preco }).subscribe(ret => {
      if(ret['E'])
        this.err = ret['E'];
      else
        this.dialog.close();
    })
  }
}


@Component({
  selector: 'app-dialog-freight-edit',
  templateUrl: './dialog-freight-edit.component.html'
})
export class DialogUpFreightComponent implements OnInit {
  err;
  dado = JSON.parse(sessionStorage.getItem('user'));
  preco;

  constructor(
    private dialog: MatDialogRef<DialogFreightComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private s_f: FreightService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.s_f.upFreight(this.dado.id_empresa, this.data).subscribe(ret => {
      if(ret['E'])
        this.err = ret['E'];
      else
        this.dialog.close();
    })
  }
}