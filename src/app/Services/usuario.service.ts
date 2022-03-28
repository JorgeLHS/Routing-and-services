import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url ='https://gorest.co.in/public/v2/users';
  token ='924fdbf3586d1b14156c188352b1dd704f98f5e24aa3e326752609236409dbfc';
  constructor(private http:HttpClient) { }

  getUsuarios(): Observable<any>{
    return this.http.get<any>(this.url + '?access-token=' + this.token);
  }

}
