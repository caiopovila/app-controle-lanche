import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../config.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService extends ConfigService {

  getList(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/item/list?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
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
    return this.http.post(this.url+`/item/list/search?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {q}, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }


  getDet(id: string, item: string): any {
    return this.http.get(this.url+`/item/dado/${item}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postItem(id: string, dado: { nome: any; descricao: any; preco: any; }): any {
    return this.http.post(this.url+`/item/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postProdsItem(id: string, prods: any[], item: any): any {
    return this.http.post(this.url+`/item/products/${item}`, prods, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delProdsItem(id: string, prods: any[], item: number): any {
    return this.http.post(this.url+`/item/products/del/${item}`, prods, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  putItem(id: string, dado: { nome: string; descricao: string; preco: number; }, item: number): any {
    return this.http.put(this.url+`/item/dado/${item}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delItem(id: string, item: number): any {
    return this.http.delete(this.url+`/item/dado/${item}`, {
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