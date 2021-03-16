import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { ConfigService } from '../../../../config.service';

@Injectable({
  providedIn: 'root'
})
export class FreightService extends ConfigService {

  listFreight(id: string, row: number, off: number): any {
    return this.http.get(this.url+`/freight/list?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  searchFreight(q: string, id: string, row: number, off: number): any {
    return this.http.get(this.url+`/freight/list/search/${q}?${row ? `row=${row}` : ''}${off ? `&offset=${off}` : ''}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postFreight(id: string, dado): any {
    return this.http.post(this.url+`/freight/dado`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  upFreight(id: string, dado: any): any {
    return this.http.put(this.url+`/freight/dado/${dado.id_frete}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delFreight(id: string, fre: number): any {
    return this.http.delete(this.url+`/freight/dado/${fre}`, {
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
