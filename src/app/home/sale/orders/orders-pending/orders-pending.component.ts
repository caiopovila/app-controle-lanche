import { Component, OnInit } from '@angular/core';

import { PageEvent } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { DialogSaleComponent } from '../../../../dialogs/dialog-sale/dialog-sale.component';
import { SaleService } from '../../sale.service';


@Component({
  selector: 'app-orders-pending',
  templateUrl: './orders-pending.component.html',
  styleUrls: ['./orders-pending.component.css']
})
export class OrdersPendingComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'))
  listPending;
  
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length;
  pageEvent: PageEvent;

  constructor(
    private _bottomSheet: MatBottomSheet,
    private s_o: SaleService
  ) { }

  ngOnInit(): void {
    this.getList(this.pageEvent ? this.pageEvent.pageSize : 5, this.pageEvent ? this.pageEvent.pageSize * this.pageEvent.pageIndex : null);
  }

  getList(row, off) {
    this.s_o.getListPending(this.dado.id_empresa, row, off).subscribe(ret => {
      this.length = ret[0][0].total;
      if (ret[1])
        this.listPending = ret[1];
    });
  }
  
  det(det) {
    this._bottomSheet.open(DialogSaleComponent, {
      data: det
    }).afterDismissed().subscribe(ret => this.getList(this.pageEvent ? this.pageEvent.pageSize : 5, this.pageEvent ? this.pageEvent.pageSize * this.pageEvent.pageIndex : null))
  }

}
