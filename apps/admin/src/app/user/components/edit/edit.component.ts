import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '@task2023/common-all';
@Component({
  selector: 'task2023-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
    append!: number;
    data!:any;
    variable:any;
    constructor(
      public employ: EmployeeService,
      public router: Router,
      public route: ActivatedRoute) { }
    employeeReg!: FormGroup;
    ngOnInit() {
      this.formOnIt();
      this.route.params.subscribe((res: any) => {
        if (res && res.id) {
          console.log(res);
          this.append = res.id;
          this.data = res.data;
          this.employ.postMethod('/getBack', { id: this.append }).subscribe((res: any) => {
            this.employeeReg.patchValue(res.backDetails);
            this.variable=res.backDetails.address
          })
        }
      })
    }
  formOnIt() {
    this.employeeReg = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      address: new FormArray([])
    });
    this.createArray();
  }

  createArray() {
    (this.employeeReg.get('address') as FormArray).push(
      new FormGroup({
        address: new FormControl('Tirunelveli', Validators.required)
      })
    )
  }
  getContacts() {
    return (this.employeeReg.get('address') as FormArray).controls;
  }

  removeArray(i: number) {
    (this.employeeReg.get('address') as FormArray).removeAt(i);
  }

  back() {
    this.router.navigate(['/navbar/user']);
  }

}
