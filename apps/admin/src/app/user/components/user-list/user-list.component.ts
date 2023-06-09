import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '@task2023/common-all';

@Component({
  selector: 'task2023-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  dataSource: any = [];
 displayedColumns: string[] = ['firstName', 'lastName', 'email', 'dateOfBirth','gender','address','Action'];
  constructor(private employee:EmployeeService,private route:Router){}

 ngOnInit(){
  this.employee.login('/getBackform').subscribe((res: any) => {
    console.log(res);
    this.dataSource = res.backformdetails;
  })
 };

  submit(element:any){
    console.log(element);
    this.route.navigate(['/navbar/edit','edit',element.id])
  }

}
