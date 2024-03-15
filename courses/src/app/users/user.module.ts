import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { UserService } from './user.service';
import { LogoutComponent } from './component/logout/logout.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent,LogoutComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,MatIconModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule,MatOptionModule
  ],
  providers:[UserService],
  exports: [
    UsersRoutingModule
  ]
})
export class UserModule { }
