import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';

import { ClientService } from '../../client.service';

import { DialogClientComponent, DialogClientEditComponent, DialogClientEndComponent } from '../../../../dialogs/dialog-client/dialog-client.component';
import { DialogConfirmComponent } from '../../../../dialogs/dialog-confirm/dialog-confirm.component';



@Component({
  selector: 'app-table-client-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  clients;
  displayedColumns: string[] = ['select', 'nome', 'fone', 'email', 'enderecos', 'edit'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length: any;
  pageEvent: PageEvent;
  isActive = false;

  selection = new SelectionModel(true, []);

  @Input() q: string;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private it: ClientService, public dialog: MatDialog) {
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
      this.it.search(q, this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.clients = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    } else {
      this.it.getList(this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.clients = new MatTableDataSource(ret[1]);
          this.length = ret[0][0].total;
        }
      });
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.clients.data.length;
    return numSelected == numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.clients.data.forEach(row => this.selection.select(row));
  }

  openDialog() {
    this.dialog.open(DialogClientComponent).afterClosed().subscribe(ret => {
      this.ngOnChanges();
    });
  }

  upClient(cli) {
    this.dialog.open(DialogClientEditComponent, {
      data: cli
    }).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }

  endClient(cli) {
    this.dialog.open(DialogClientEndComponent, {
      data: cli
    }).afterClosed().subscribe(r => {
      this.ngOnChanges();
    });
  }

  delClients() {
    this.dialog.open(DialogConfirmComponent, {
      data: '0'
    }).afterClosed().subscribe(result => {
      if (result == 1) {
        this.selection.selected.forEach(sel => {
          this.it.delClient(this.dado.id_empresa, sel.id_cliente).subscribe(ret => {
            if (ret.E)
              alert(ret.E);
          })
        })
      }
      this.paginator.firstPage();
      this.ngOnChanges();
    });
  }
}
