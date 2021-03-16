import { Component, Input, OnChanges, ViewChild, OnInit } from '@angular/core';

import { PageEvent, MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { ItemsService } from '../../items.service';
import { DialogItemComponent } from '../../../../dialogs/dialog-item/dialog-item.component';



interface Item {
  nome: string,
  preco: number,
  descricao: string,
  id_item: number
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  
  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  items: MatTableDataSource<Item>;
  displayedColumns: string[] = ['nome', 'descricao', 'preco'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length: any;
  pageEvent: PageEvent;
  isActive = false;
  
  @Input() q: string;

  constructor(
    private it: ItemsService, 
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.getList(this.q || null, this.pageEvent ? this.pageEvent.pageSize : 5, this.pageEvent ? this.pageEvent.pageSize * this.pageEvent.pageIndex : null);
  }
  
  getList(q: string, row: number, off: any) {
    if (q) {
      this.it.search(q, this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.items = ret[1];
          this.length = ret[0][0].total;
        }
      });
    } else {
      this.it.getList(this.dado.id_empresa, row, off).subscribe((ret: any) => {
        if (ret[1]) {
          this.items = ret[1];
          this.length = ret[0][0].total;
        }
      });
    }
  }

  openDialog() {
    this.dialog.open(DialogItemComponent).afterClosed().subscribe(ret => {
      this.ngOnChanges();
    });
  }
}
