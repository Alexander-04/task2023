import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private user:UserService) { }
  login(url: any) {
   return this.user.getLink('v1'+ url)
  }

    getMethod(url: string) {
    return this.user.getLink('v1' + url);
  }

  postMethod(url: string, data: any) {
    return this.user.postLink('v1' + url, data);
  }
}
