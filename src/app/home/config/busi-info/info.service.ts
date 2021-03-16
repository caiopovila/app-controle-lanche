import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from '../../../config.service';


@Injectable({
  providedIn: 'root'
})
export class InfoService extends ConfigService {

  getInfo(id: string): any {
    return this.http.get(this.url+`/busi/dado`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postInfo(dado): any {
    return this.http.post(this.url+`/busi/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      observe: 'body', 
      responseType: 'json'
    })
  }

  upInfo(id: string, dado): any {
    return this.http.put(this.url+`/busi/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postAdress(id: string, dado): any {
    return this.http.post(this.url+`/busi/adress`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  putAdress(id: string, dado): any {
    return this.http.put(this.url+`/busi/adress/${dado.id_endereco}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }
}
