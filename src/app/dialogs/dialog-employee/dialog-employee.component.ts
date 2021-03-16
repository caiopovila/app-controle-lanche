import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FinancesService } from '../../home/finances/finances.service';


interface empData {
  id_funcionario: number,
  nome: string,
  funcao: string,
  salario: number,
  dia_pagamento: number
}


@Component({
  selector: 'app-dialog-employee',
  templateUrl: './dialog-employee.component.html'
})
export class DialogEmployeeComponent {
  nome;
  salario;
  pagamento;
  funcao;
  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private dialog: MatDialogRef<DialogEmployeeComponent>,
    private fs: FinancesService
  ) { }

  onSubmit() {
    this.fs.postEmp(this.dado.id_empresa, {
      nome: this.nome,
      salario: this.salario,
      dia_pagamento: this.pagamento,
      funcao: this.funcao
    }).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else if (ret.id_funcionario)
        this.dialog.close();
    })
  }
}


@Component({
  selector: 'app-dialog-employee-edit',
  templateUrl: './dialog-employee-edit.component.html'
})
export class DialogEmployeeEditComponent {

  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private dialog: MatDialogRef<DialogEmployeeEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: empData,
    private fs: FinancesService
  ) { }

  onSubmit() {
    this.fs.putEmp(this.dado.id_empresa, this.data).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else if (ret.S)
        this.dialog.close();
    })
  }
}
