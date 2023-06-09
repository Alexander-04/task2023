import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from '@task2023/common-all';
import { DialogComponent } from 'libs/shared/src/lib/components/dialog/dialog.component';

@Component({
  selector: 'task2023-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
   loginGroup!: FormGroup;
   show=false;

  constructor(private employ: EmployeeService,private route:Router,private snackBar:MatSnackBar
    ,private openDialogue : MatDialog) { }
  ngOnInit() {
    this.loginGroup = new FormGroup({
      email: new FormControl(null,Validators.required),
      password: new FormControl(null,Validators.required)
    })
  }
  submit() {
    if (this.loginGroup.valid) {
      this.employ.login('/getBackform').subscribe((res:any)=>{
        if(res && res.backformdetails[0].email && res.backformdetails[0].password){
          if(this.loginGroup.value.email === res.backformdetails[0].email &&  this.loginGroup.value.password === res.backformdetails[0].password){
            this.route.navigate(['/navbar/display','info',res.backformdetails[0].id]);
          }
          else{
            this.openDialogue.open(DialogComponent,{data: {
          content: 'Invalid'},
          autoFocus: false});
          }
        }
      })
    }
  }
}
