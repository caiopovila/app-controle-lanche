import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FinancesService } from '../../home/finances/finances.service';

interface costData {
  id_custo: number,
  nome: string,
  valor: number,
  dia_vencimento: number
}

@Component({
  selector: 'app-dialog-costs',
  templateUrl: './dialog-costs.component.html'
})
export class DialogCostsComponent {
  nome;
  valor;
  vencimento;
  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private dialog: MatDialogRef<DialogCostsComponent>,
    private fs: FinancesService
  ) { }

  onSubmit() {
    this.fs.postCost(this.dado.id_empresa, {
      nome: this.nome,
      valor: this.valor,
      dia_vencimento: this.vencimento
    }).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else if (ret.id_custo)
        this.dialog.close();
    })
  }
}


@Component({
  selector: 'app-dialog-costs-edit',
  templateUrl: './dialog-costs-edit.component.html'
})
export class DialogCostsEditComponent {

  err;

  dado = JSON.parse(sessionStorage.getItem('user')) || null;

  constructor(
    private dialog: MatDialogRef<DialogCostsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: costData,
    private fs: FinancesService
  ) { }

  onSubmit() {
    this.fs.putCost(this.dado.id_empresa, this.data).subscribe(ret => {
      if (ret.E)
        this.err = ret.E;
      else if (ret.S)
        this.dialog.close();
    })
  }
}
