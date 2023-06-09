import { Route } from '@angular/router';
import { NavbarComponent } from './user/components/navbar/navbar.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { EditComponent } from './user/components/edit/edit.component';

export const appRoutes: Route[] = [
  {path:'',redirectTo:'navbar',pathMatch:'full'},
  {path:'navbar',component:NavbarComponent,children:[
    {path:'user',component:UserListComponent},
    // {path:'edit',component:EditComponent},
    {path:'edit/:data/:id',component:EditComponent}
  ]},
];
