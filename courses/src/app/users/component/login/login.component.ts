
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
import { CoursesService } from '../../../courses/courses.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  showInput = false;
  public loginForm !: FormGroup;
  public users: any[] = [];
  public courses: any[] = [];
  public lecturs: any[] = [];
  public matchingUser:any
  public isLecture!:boolean
  public errorMessage: string | null = null;
  public isUser!:boolean
  public isLectur:boolean=true
 

  constructor(private _userService: UserService,private _courseServise:CoursesService, private router:Router) { }
  ngOnInit(): void {
    this.isUser=true
    this.loginForm = new FormGroup({
      'username': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'password': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
       'course' : new FormControl('')
    })
  }
  public getCourses() {
    console.log("getcourse")
    this._courseServise.getCoursesFromServer()
      .subscribe(response => {
        this.courses = response; 
        console.log("courseget",this.courses)
      }, error => {
        console.error('Error fetching users:', error);
      });
  }
  public getUsers() {
    console.log("get")
    this._userService.getUsersFromServer()
      .subscribe(response => {
        this.users = response; 
        this.checkUserCredentials(this.users); 
      }, error => {
        console.error('Error fetching users:', error);
      });
  }
  public getLectures() {
    this._userService.getLecturesFromServer()
      .subscribe(response => {
        sessionStorage.setItem("lecturs",JSON.stringify(response))
        const lecturesData =sessionStorage.getItem("lecturs"); 
        if (lecturesData !== null) {
          this.lecturs = JSON.parse(lecturesData);
          this.showInput = true;
          this.checkUserCredentials(this.lecturs); 
        } else {
          console.error("Lectures data is null");
        }
      },
      error => {
        console.error('Error fetching users:', error);
      }
      )}
  public onLogin() {
    if(this.isUser==true){this.getUsers();}
    else if(this.isLectur==false){
      this.checkUserCredentials(this.lecturs)
    }
    else{this.router.navigate(['course/all-courses'])
    sessionStorage.setItem("lector",JSON.stringify(this.matchingUser))
  }
        }

  
  public checkUserCredentials(list:any[]) {
    this.isLectur==true

    const enteredUsername = this.loginForm.get('username')?.value;
    const enteredPassword = this.loginForm.get('password')?.value;
     this.matchingUser = list.find(user => user.name === enteredUsername);
    if (this.matchingUser) {
      
      if (this.matchingUser.password === enteredPassword && this.isUser===true) {
        sessionStorage.setItem("user",JSON.stringify(this.matchingUser))
        this.router.navigate(['course/all-courses'])
       } 
       
      else if(this.matchingUser.password === enteredPassword && this.isUser===false)
      {
        this.showInput=true
        this.getCourses()
        
      }
      else {

        this.errorMessage = 'Incorrect password. Please try again.';
        this.isLectur=false
       }
    } 
    else {

      alert( 'Incorrect username and password. Please try again.');
      console.log('User not found 2');
      this.router.navigate(['user/register',enteredUsername]);
      }
   } 
  public onLecture()
  {
   this.isUser=false
   this.getLectures()

  }
  public onSelectionCatogoryChanged(event: any):void{
      console.log(event,"event")
  }

}




