import { Component } from '@angular/core';

@Component({
  selector: 'app-table-client',
  templateUrl: './table-client.component.html',
  styleUrls: ['./table-client.component.css']
})
export class TableClientComponent {
  title = 'Clientes';

  q: string;
}
