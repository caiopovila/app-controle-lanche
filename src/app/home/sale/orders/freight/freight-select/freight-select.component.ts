import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DialogFreightComponent } from '../../../../../dialogs/dialog-freight/dialog-freight.component';
import { FreightService } from '../freight.service';

@Component({
  selector: 'app-freight-select',
  templateUrl: './freight-select.component.html',
  styleUrls: ['./freight-select.component.css']
})
export class FreightSelectComponent implements OnInit {
  dado = JSON.parse(sessionStorage.getItem('user'));
  @Input() adressSelect;
  listFre;
  selectedFreight;

  constructor(
    private s_f: FreightService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.listFre = 0;
    this.selectedFreight = 0;
    if (this.adressSelect)
      this.s_f.searchFreight(this.adressSelect.bairro +' '+ this.adressSelect.cidade, this.dado.id_empresa, 20, null).subscribe(ret => {
        this.listFre = ret[1];
      });
  }

  openDialogFre() {
    this.dialog.open(DialogFreightComponent, {
      data: this.adressSelect
    }).afterClosed().subscribe(ret => {
      this.ngOnChanges();
    })
  }
}
