import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';

import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

import { DialogConfirmComponent } from '../../../../dialogs/dialog-confirm/dialog-confirm.component';
import { DialogProviderComponent, DialogProviderEditComponent } from '../../../../dialogs/dialog-provider/dialog-provider.component';

import { StockService } from '../../stock.service';


@Component({
  selector: 'app-provider-table',
  templateUrl: './provider-table.component.html',
  styleUrls: ['./provider-table.component.css']
})
export class ProviderTableComponent implements OnInit, OnChanges {

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  providers;
  displayedColumns: string[] = [
    'select',
    'nome',
    'fone',
    'email',
    'edit'
  ];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length: any;
  pageEvent: PageEvent;
  isActive = false;
  selection = new SelectionModel(true, []);

  @Input() q: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private ss: StockService) {
    const initialSelection = [];
    const allowMultiSelect = true;
    this.selection = new SelectionModel(allowMultiSelect, initialSelection);
  }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.selection.clear();
    this.getList(this.q || null, this.pageEvent ? this.pageEvent.pageSize : 5, this.pageEvent ? this.pageEvent.pageSize * this.pageEvent.pageIndex : null);
  }

  getList(q: string, row: number, off: any) {
    if (q) {
      this.ss.searchProvs(q, this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.providers = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    } else {
      this.ss.getListProvs(this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.providers = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    }
  }

  openDialog() {
    this.dialog.open(DialogProviderComponent).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.providers.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.providers.data.forEach(row => this.selection.select(row));
  }


  delProvs() {
    let d = this.dialog.open(DialogConfirmComponent, {
      data: '0'
    });
    
    d.afterClosed().subscribe(result => {
      if (result == 1)
      this.selection.selected.forEach(sel => {
        this.ss.delProv(this.dado.id_empresa, sel.id_fornecedor).subscribe(ret => {
          if (ret.E)
            alert(ret.E);          
        })
          this.paginator.firstPage();
          this.ngOnChanges();
      })
    });
  }

  upProv(item) {
    this.dialog.open(DialogProviderEditComponent, {
      data: item
    }).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }
}
