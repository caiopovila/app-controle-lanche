import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService } from "../../auth/auth.service";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  title = 'Snack-control';
    
  constructor(
    private logout: AuthService,
    private route: Router
  ) { }

  sair() {
    this.logout.logout().subscribe(ret => {
      if (ret.S){
        sessionStorage.clear();
        this.route.navigate(['/']);
      }
    })
  }
}
