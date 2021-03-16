import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../config.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends ConfigService {

  getList(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/cli/list/client?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  getListAdress(id: string, cli: number): any {
    return this.http.get(this.url+`/cli/list/adress/${cli}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  search(q: string, id: string, row: number, off: number): any {
    return this.http.get(this.url+`/cli/list/search/${q}?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postClient(id: string, dado: { nome: any; fone: any; email: any; }): any {
    return this.http.post(this.url+`/cli/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }
  
  postAdressClient(id: string, dado: any, cli: number): any {
    return this.http.post(this.url+`/cli/adress/${cli}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  upClient(id: string, dado: any): any {
    return this.http.put(this.url+`/cli/dado/${dado.id_cliente}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delClient(id: string, cli: number): any {
    return this.http.delete(this.url+`/cli/dado/${cli}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delEndClient(id: string, cli: number, adr: number): any {
    return this.http.delete(this.url+`/cli/adress/${cli}/${adr}`, {
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
