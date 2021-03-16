import { Component, OnInit } from '@angular/core';

import { InfoService } from '../home/config/busi-info/info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  pass: string;
  Con_pass: string;
  nome: string;
  fone: string;

  isActive = false;

  title = 'Cadastro';
  erro: any;

  constructor(
    private s_i: InfoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cad() {
    if (this.Con_pass == this.pass)
      this.s_i.postInfo({
        nome: this.nome,
        email: this.email,
        fone: this.fone,
        senha: this.pass
      }).subscribe(ret => {
        if(ret.E)
          this.erro = ret.E;
        else {
          alert('Cadastro feito');
          this.router.navigate(['./']);
        }
      })
    else
      this.erro = 'Senha não compativel.'
  }
}
