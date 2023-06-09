import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { CommonAllModule } from '@task2023/common-all';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditComponent } from './components/edit/edit.component';
@NgModule({
  declarations: [UserListComponent, NavbarComponent, EditComponent],
  imports: [CommonModule, CommonAllModule],
})
export class UserModule {}
