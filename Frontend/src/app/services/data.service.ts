import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable({
 providedIn: 'root'
})
export class DataService {

  private url = 'http://localhost:3100';
  private httpOptions = {
    headers: new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3100/api'
    })
  };

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url + '/api/posts');
  }

  getById(id: string) {
    return this.http.get(this.url + '/api/post/' + id);
  }

 public addPost(postId:string, title:string, text:string, image:string) {
  const post = {
   "title": title,
   "text": text,
   "image": image,
   "id": postId
  }
  return this.http.post(this.url + '/api/post', post, this.httpOptions)
 }
}
