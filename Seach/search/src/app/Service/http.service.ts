import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from '../Model/list';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseURL: string = "http://localhost:3000/";
  static searchData: any;

  constructor(private http: HttpClient) { }
  searchData() {
    return this.http.get<string[]>(this.baseURL + 'content');
  }
}
