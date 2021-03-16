import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FinancesService } from '../finances.service';

import { DialogEmployeeComponent, DialogEmployeeEditComponent } from '../../../dialogs/dialog-employee/dialog-employee.component';
import { DialogConfirmComponent } from '../../../dialogs/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit {
  
  dado = JSON.parse(sessionStorage.getItem('user')) || null;
  listemp;

  constructor(
    private fs: FinancesService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fs.getListEmp(this.dado.id_empresa).subscribe(ret => {
      if (ret)
        this.listemp = ret;
    })
  }

  newFunc() {
    this.dialog.open(DialogEmployeeComponent).afterClosed().subscribe(ret => {
      this.ngOnInit();
    })
  }

  upFunc(func) {
    this.dialog.open(DialogEmployeeEditComponent, {data: func}).afterClosed().subscribe(ret => {
      this.ngOnInit();
    })
  }

  delFunc(func) {
    this.dialog.open(DialogConfirmComponent, {data: 0}).afterClosed().subscribe(ret => {
      if (ret == 1) {
        this.fs.delEmp(this.dado.id_empresa, func.id_funcionario).subscribe(rd => {
          if (rd.E)
            alert(rd.E);
          else
            this.ngOnInit();
        })
      }
    })
  }
}
