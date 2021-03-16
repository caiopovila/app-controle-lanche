import { Component, OnInit, Input, ViewChild, OnChanges } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { StockService } from '../../stock.service';
import { DialogProductComponent, DialogProductEditComponent } from '../../../../dialogs/dialog-product/dialog-product.component';
import { DialogConfirmComponent } from '../../../../dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  products;
  displayedColumns: string[] = [
    'select',
    'nome',
    'marca',
    'preco_unitario',
    'valor_total',
    'quantidade',
    'peso_unitario',
    'fornecedor',
    'curva',
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
      this.ss.searchProds(q, this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.products = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    } else {
      this.ss.getListProds(this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.products = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    }
  }

  openDialog() {
    this.dialog.open(DialogProductComponent).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.products.data.forEach(row => this.selection.select(row));
  }


  delProds() {
    let d = this.dialog.open(DialogConfirmComponent, {
      data: '0'
    });
    
    d.afterClosed().subscribe(result => {
      if (result == 1) {
        this.selection.selected.forEach(sel => {
          this.ss.delProd(this.dado.id_empresa, sel.id_produto).subscribe(ret => {
            if (ret.E)
              alert(ret.E);
          })
          this.ngOnChanges();
          this.paginator.firstPage();
        })
      }
    });

  }


  upProd(item) {
    this.dialog.open(DialogProductEditComponent, {
      data: item
    }).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }
}
