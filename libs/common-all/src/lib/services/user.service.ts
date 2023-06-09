import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backend='http://localhost:3000/'

  constructor(private http:HttpClient) { }
    getLink(url: any) {
    return this.http.get(this.backend + url);
  }

   postLink(url: string, data: any) {
    return this.http.post(this.backend + url, data);
  }
}
