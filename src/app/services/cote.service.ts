import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CoteService {
  base_url: string = 'http://192.168.1.99:8080/testRestApi/employees';
  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get(this.base_url);
  }
}
