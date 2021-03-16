import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ConfigService } from '../../config.service';


@Injectable({
  providedIn: 'root'
})
export class FinancesService extends ConfigService {

  getListCost(id: string): any {
    return this.http.get(this.url+`/busi/cost`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postCost(id: string, dado: any): any {
    return this.http.post(this.url+`/busi/cost`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  putCost(id: string, dado: any): any {
    return this.http.put(this.url+`/busi/cost/${dado.id_custo}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delCost(id: string, custo: number): any {
    return this.http.delete(this.url+`/busi/cost/${custo}`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }



  // EMPLOYEES

  getListEmp(id: string): any {
    return this.http.get(this.url+`/busi/employee`, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  postEmp(id: string, dado: any): any {
    return this.http.post(this.url+`/busi/employee`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  putEmp(id: string, dado: any): any {
    return this.http.put(this.url+`/busi/employee/${dado.id_funcionario}`, dado, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      withCredentials: true,
      params: new HttpParams().set('id', id),
      observe: 'body', 
      responseType: 'json'
    })
  }

  delEmp(id: string, func: number): any {
    return this.http.delete(this.url+`/busi/employee/${func}`, {
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
