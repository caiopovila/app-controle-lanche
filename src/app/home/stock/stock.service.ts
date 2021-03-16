import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root'
})
export class StockService extends ConfigService {

  getListProds(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/stock/product/list?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  getListProvs(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/stock/provider/list?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  searchProds(q: string, id: string, row: number, off: number): any {
    return this.http.get(this.url+`/stock/product/search/${q}?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  searchProvs(q: string, id: string, row: number, off: number): any {
    return this.http.get(this.url+`/stock/provider/search/${q}?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postProd(id: string, dado: any): any {
    return this.http.post(this.url+`/stock/product`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postProv(id: string, dado: any): any {
    return this.http.post(this.url+`/stock/provider`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delProd(id: string, prod: number): any {
    return this.http.delete(this.url+`/stock/product/${prod}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delProv(id: string, prov: number): any {
    return this.http.delete(this.url+`/stock/provider/${prov}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  upProd(id: string, dado: any): any {
    return this.http.put(this.url+`/stock/product/${dado.product.id_produto}/${dado.stock.id_estoque}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  upProv(id: string, dado: any): any {
    return this.http.put(this.url+`/stock/provider/${dado.id_fornecedor}`, dado, {
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
