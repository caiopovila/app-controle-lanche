import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  email: string;
  pass: string;
  isActive = false;

  title = 'Entrar';
  erro: any;

  constructor(private login: AuthService, private router: Router) { }

  ngOnInit() {
  }

  auth() {
    const dado = toBase64String(this.email+':'+this.pass);
    this.login.login(dado).subscribe((ret) => {
      if (ret.E) {
        this.erro = ret.E
      }
      if (ret.id_empresa) {
        sessionStorage.setItem('user', JSON.stringify(ret));
        this.router.navigate(['./inicio']);
      }
    });

    this.erro = '';
  }
}
