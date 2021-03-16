import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

import { FreightService } from '../freight.service';
import { DialogFreightComponent, DialogUpFreightComponent } from '../../../../../dialogs/dialog-freight/dialog-freight.component';
import { DialogConfirmComponent } from '../../../../../dialogs/dialog-confirm/dialog-confirm.component';


@Component({
  selector: 'app-freight-list',
  templateUrl: './freight-list.component.html',
  styleUrls: ['./freight-list.component.css']
})
export class FreightListComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'));
  listFreight;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length;
  pageEvent: PageEvent;
  displayedColumns: string[] = [
    'select',
    'bairro',
    'cidade',
    'preco',
    'edit'
  ];
  isActive = false;
  selection = new SelectionModel(true, []);

  @Input() q: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    public s_f: FreightService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.selection.clear();
    this.getList(this.q || null, this.pageEvent ? this.pageEvent.pageSize : 5, this.pageEvent ? this.pageEvent.pageSize * this.pageEvent.pageIndex : null);
  }

  getList(q: string, row: number, off: any) {
    if (q) {
      this.s_f.searchFreight(q, this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.listFreight = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    } else {
      this.s_f.listFreight(this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.listFreight = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    }
  }

  openDialogFre() {
    this.dialog.open(DialogFreightComponent, {
      data: {
        bairro: '',
        cidade: ''
      }
    }).afterClosed().subscribe(ret => {
      this.ngOnChanges();
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.listFreight.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.listFreight.data.forEach(row => this.selection.select(row));
  }


  delFreight() {
    let d = this.dialog.open(DialogConfirmComponent, {
      data: '0'
    });
    
    d.afterClosed().subscribe(result => {
      if (result == 1) {
        this.selection.selected.forEach(sel => {
          this.s_f.delFreight(this.dado.id_empresa, sel.id_frete).subscribe(ret => {
            if (ret.E)
              alert(ret.E);
          })
          this.paginator.firstPage();
          this.ngOnChanges();
        })
      }
    });

  }

  upFre(item) {
    this.dialog.open(DialogUpFreightComponent, {
      data: item
    }).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }
}
