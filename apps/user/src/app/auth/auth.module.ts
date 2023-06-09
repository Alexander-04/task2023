import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CommonAllModule } from '@task2023/common-all';
import { SharedModule } from '@task2023/shared';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserModule } from '../user/user.module';

@NgModule({
  declarations: [SignInComponent, NavbarComponent],
  imports: [CommonModule, CommonAllModule, SharedModule],
  exports:[UserModule]
})
export class AuthModule {}
