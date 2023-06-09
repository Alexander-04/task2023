import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '@task2023/common-all';

@Component({
  selector: 'task2023-display-user',
  templateUrl: './display-user.component.html',
  styleUrls: ['./display-user.component.css'],
})
export class DisplayUserComponent {
  append!:number;
  data:any;
  source:any

  constructor(private route:ActivatedRoute,private employ:EmployeeService){}

   ngOnInit() {
      this.route.params.subscribe((res: any) => {
        if (res && res.id) {
          console.log(res);
          this.append = res.id;
          this.data = res.data;
          this.employ.postMethod('/getBack', { id: this.append }).subscribe((res: any) => {
          this.source=res.backDetails;
          })
        }
      })
    }

}
