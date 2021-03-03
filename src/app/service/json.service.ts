import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class JsonService {

_url="http://localhost:4000/apiUser"

  constructor(
    private http:HttpClient
  ) { }

  get():Observable<any>{
return this.http.get(`${this._url}/userdetails`)
  }
  post(form):Observable<any>{
    var formdata=form;
    //formdata.value="sdfsdf";
  return  this.http.post(`${this._url}/create`,formdata)
  }
  update(form,id):Observable<any>{
    var formdata=form;
  return  this.http.put(`${this._url}/userdetails/${id}`,formdata)
  }
  getById(id):Observable<any>{
  return  this.http.get(`${this._url}/userdetails/${id}`)
  }

  deleteById(id){
    return  this.http.delete(`${this._url}/userdetails/${id}`)
    }
}
