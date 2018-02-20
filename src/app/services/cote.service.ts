import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoteService {
  base_url: string = 'http://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.base_url);
  }
}
