import { Injectable } from '@angular/core';
import { DialogComponent } from '../components/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserDetailService {

  constructor(private snack:MatDialog) { }

  getUser(){
    
  }
}
