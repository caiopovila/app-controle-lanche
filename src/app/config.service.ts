import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  url = "http://localhost:3000/API";
  
  idSession = JSON.parse(sessionStorage.getItem('user'));

  constructor(
    public http: HttpClient
  ) { }
}
