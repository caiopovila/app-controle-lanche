import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freight',
  templateUrl: './freight.component.html',
  styleUrls: ['./freight.component.css']
})
export class FreightComponent implements OnInit {
  title = 'Fretes';

  q: string;

  constructor() { }

  ngOnInit(): void {
  }
}
