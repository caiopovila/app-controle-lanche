import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { PageEvent, MatPaginator } from '@angular/material/paginator';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

import { SaleService } from '../sale.service';

import { DialogSaleComponent } from '../../../dialogs/dialog-sale/dialog-sale.component';

interface Sale {
  id_venda,
  endereco,
  frete,
  progresso,
  preco_total,
  cliente,
  data_criado,
  data_atualizado,
  empresa,
  nome,
  fone,
  email
}

@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})
export class RegistersComponent implements OnInit {
  title = 'Registros de vendas';
  
  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  listSale: MatTableDataSource<Sale>;

  displayedColumns: string[] = ['nome', 'fone', 'info', 'preco_total', 'frete', 'total', 'progresso', 'data'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  length: any;
  pageEvent: PageEvent;
  isActive = false;
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private ss: SaleService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit(): void {
    this.getList(this.pageEvent ? this.pageEvent.pageSize : 5, null);
  }

  getList(row, off) {
    this.ss.getList(this.dado.id_empresa, row, off).subscribe((ret: any) => {
      if (ret[1]) {
        this.listSale = ret[1];
        this.length = ret[0][0].total;
      }
    })
  }

  det(det) {
    this._bottomSheet.open(DialogSaleComponent, {
      data: det
    })
  }
}
