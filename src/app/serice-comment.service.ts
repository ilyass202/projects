import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_Comment = "http://localhost:8080/poste/api";
@Injectable({
  providedIn: 'root'
})
export class SericeCommentService {

  constructor(private http : HttpClient ) { }
  createComment(posteId : number , postedBy : String , Content : String) :  Observable<any> {

   const params = new HttpParams().set('postId', posteId.toString()).set('postedBy', postedBy.toString())

  return  this.http.post<any>( `${API_Comment}/createComment` , Content , {params});
  
}
getAllComments(PostId : number) : Observable<any> {
  return this.http.get(`${API_Comment}/getPostComments/${PostId}` , {});
}
}