import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  constructor(private router:Router){ }

  toLogin(){
    this.router.navigate(['user/login'])
  }

  toRegister(){
    this.router.navigate(['user/register/:usernameRegister'])
  }
  
  toLogout() {
    this.router.navigate(['user/logout']); 
  }

  toAllCourses(){
    this.router.navigate(['course/all-courses'])
  }

  toAddCourse(){
    this.router.navigate(['course/add-coures'])
  }

  private async onLogout() {
    console.log("logout");
    sessionStorage.setItem("user", "");
    console.log("log-saa", sessionStorage.getItem("user"));
  }


}
