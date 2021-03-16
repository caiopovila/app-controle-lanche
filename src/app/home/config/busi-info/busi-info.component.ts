import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { InfoService } from "./info.service";

import { DialogInfoBusinessComponent, DialogNewAdressBusinessComponent, DialogUpAdressBusinessComponent } from '../../../dialogs/dialog-info-business/dialog-info-business.component';


interface Business {
  empresa: any,
  enderecos: any
}

@Component({
  selector: 'app-busi-info',
  templateUrl: './busi-info.component.html',
  styleUrls: ['./busi-info.component.css']
})
export class BusiInfoComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem("user"));
  info: Business;

  constructor(
    private s_i: InfoService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.s_i.getInfo(this.dado.id_empresa).subscribe((ret: Business) => this.info = ret);
  }

  upDado() {
    this.dialog.open(DialogInfoBusinessComponent, {
      data: this.info.empresa
    }).afterClosed().subscribe(ret => this.ngOnInit());
  }

  addAdress() {
    this.dialog.open(DialogNewAdressBusinessComponent).afterClosed().subscribe(ret => this.ngOnInit());
  }

  upAdress() {
    this.dialog.open(DialogUpAdressBusinessComponent, {
      data: this.info.enderecos[0]
    }).afterClosed().subscribe(ret => this.ngOnInit());
  }
}
