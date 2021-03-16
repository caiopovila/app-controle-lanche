import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from '../config.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService extends ConfigService {

  login(dado: string): Observable<any> {
    return this.http.post(this.url + '/busi/auth', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorizaton': 'Basic ' + dado
      }),
      withCredentials: true,
      observe: 'body',
      responseType: 'json'
    });
  }

  test(): boolean {
    this.http.get(this.url + '/busi/auth/test', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', this.idSession),
      observe: 'body',
      responseType: 'json'
    }).subscribe(ret => {
      if (ret == this.idSession)
        return true;
    });
    return false;
  }

  logout(): Observable<any> {
    return this.http.get(this.url + '/busi/auth', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', this.idSession),
      observe: 'body',
      responseType: 'json'
    });
  }
}