import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { CommonAllModule } from '@task2023/common-all';

@NgModule({
  declarations: [DisplayUserComponent],
  imports: [CommonModule,CommonAllModule],
  exports:[DisplayUserComponent]
})
export class UserModule {}
