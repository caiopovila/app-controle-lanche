import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FinancesService } from '../finances.service';
import { DialogCostsComponent, DialogCostsEditComponent } from '../../../dialogs/dialog-costs/dialog-costs.component';
import { DialogConfirmComponent } from 'src/app/dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css']
})
export class CostsComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  listcosts;

  constructor(
    private fs: FinancesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fs.getListCost(this.dado.id_empresa).subscribe(ret => {
      if (ret)
        this.listcosts = ret;
    })
  }

  newCost() {
    this.dialog.open(DialogCostsComponent).afterClosed().subscribe(ret => {
      this.ngOnInit();
    })
  }

  upCost(cust) {
    this.dialog.open(DialogCostsEditComponent, {data: cust}).afterClosed().subscribe(ret => {
      this.ngOnInit();
    })
  }

  delCost(cust) {
    this.dialog.open(DialogConfirmComponent, {data: 0}).afterClosed().subscribe(ret => {
      if (ret == 1) {
        this.fs.delCost(this.dado.id_empresa, cust.id_custo).subscribe(rd => {
          if (rd.E)
            alert(rd.E);
          else
            this.ngOnInit();
        })
      }
    })
  }
}
