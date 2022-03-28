import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url ='https://gorest.co.in/public-api/users';
  token ='4f9516ca40737bdb574a508b5cf9b2c33f3b28f87629bf5df9d25f644fe7602b';
  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

}
