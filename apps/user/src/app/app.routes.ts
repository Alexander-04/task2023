import { Route } from '@angular/router';
import { SignInComponent } from './auth/components/sign-in/sign-in.component';
import { NavbarComponent } from './auth/components/navbar/navbar.component';
import { DisplayUserComponent } from './user/component/display-user/display-user.component';

export const appRoutes: Route[] = [
  {path:'',redirectTo:'signin',pathMatch:'full'},
  {path:'signin',component:SignInComponent},
  {path:'navbar',component:NavbarComponent,children:[
  {path:'display',component:DisplayUserComponent},
  {path:'display/:data/:id',component:DisplayUserComponent}
  ]}
];
