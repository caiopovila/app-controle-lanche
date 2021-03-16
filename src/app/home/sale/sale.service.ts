import { Injectable } from '@angular/core';
import { ConfigService } from '../../config.service';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService extends ConfigService {

  getList(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/sale/list?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  getListPending(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/sale/list/pending?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  getAdress(id: string, end: number): any {
    return this.http.get(this.url+`/cli/adress/${end}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  getItems(id: string, sale: number): any {
    return this.http.get(this.url+`/sale/list/items/${sale}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  register_order(id: string, dado: any): any {
    return this.http.post(this.url+`/sale/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }


  update_order(id: string, dado: any, progress: number): any {
    return this.http.put(this.url+`/sale/dado/${progress}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  add_item_order(id: string, order: number, dado: number[]): any {
    return this.http.post(this.url+`/sale/items/${order}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  remove_item_order(id: string, order: number, item: number): any {
    return this.http.delete(this.url+`/sale/items/${order}/${item}`, {
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
