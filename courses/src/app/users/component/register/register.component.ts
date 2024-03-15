
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  public usernameRegister!: string;
  public users: any[] = [];
  public registerForm !: FormGroup
  public errorMessage2: string | null = null;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _userService: UserService) { }

  ngOnInit(): void {
      this.activatedRoute.params.subscribe((params) => {
      this.usernameRegister = params['usernameRegister'];
    });

    this.registerForm = new FormGroup({
      'name': new FormControl(this.usernameRegister, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      'email': new FormControl('', [Validators.required]),
      'adress': new FormControl('', [Validators.required,Validators.minLength(3)])
    })
  }

  public getUser() {
    const userData =sessionStorage.getItem("user"); 
    if (userData !== null) {
      this.users = JSON.parse(userData);}
      this.checkuser();
  }

  public postUser()
  {
    let user: any = this.registerForm.value
    this._userService.postUserFromServer(user).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public onRegister() {
    this.getUser();
  }

  public checkuser() {
    const userName = this.registerForm.get('username')?.value;
    const userPassword = this.registerForm.get('password')?.value;

    let matchingUser = this.users.find(user => user.name === userName && user.password === userPassword)
    
    if (matchingUser) {
      this.errorMessage2 = 'Enter another name or password,These variables exist.';
    }
    else {
      this.postUser()
      this.router.navigate(['course/all-courses'])
    }
  }
}
