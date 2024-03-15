import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { LogoutComponent } from './component/logout/logout.component';

const UserRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:"register/:usernameRegister",component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"logout",component:LogoutComponent},

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(UserRoutes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
