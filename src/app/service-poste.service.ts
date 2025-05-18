import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_URL = 'http://localhost:8080/poste/api'
@Injectable({
  providedIn: 'root'
})
export class ServicePosteService {

  constructor(private http : HttpClient ) { }
  createPoste(data : any)
  : Observable<any> {
    return this.http.post(`${API_URL}/createPost`, data, { responseType: 'text' });
  }
  getAllPostes(): Observable<any> {
    return this.http.get(`${API_URL}/getAllPoste`, { responseType: 'text' });
  }
  getPosteById(id: number): Observable<any> {
    return this.http.get(`${API_URL}/getPostById/${id}`, { responseType: 'text' });
  }
  likePost(id : number) : Observable<any>{
   return this.http.put(`${API_URL}/likePost/${id}` , {responseType: 'text'})
  }
  getPostSearch(name : string) : Observable<any>{
   return  this.http.get(`${API_URL}/search/${name}` , { responseType: 'text' })
  }
}
