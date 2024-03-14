import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AllCoursesComponent } from './componet/all-courses/all-courses.component';
// import { AddCourseComponent } from './componet/all-courses/add-course/add-course.componentt
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CoursesModule } from './courses/courses.module';
import { WayLearningPipe } from './courses/way-learning.pipe';
// import { WayLearningPipe } from './way-learning.pipe';
// import { AllCoursesComponent } from './courses/componet/all-courses/all-courses.component';
// import { AddCourseComponent } from './courses/componet/add-course/add-course.component';
// import { LoginComponent } from './users/login/login.component';
// import { CoursesModule } from './courses/courses.module';
// import { AllCoursesComponent } from './courses/componet/all-courses/all-courses.component';
@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [CommonModule, RouterOutlet, LoginComponent, ReactiveFormsModule, 
  //           FormsModule, AllCoursesComponent,AddCourseComponent,
  //           NavbarComponent,FooterComponent,HomeComponent,WayLearningPipe],
  imports: [CommonModule, RouterOutlet, HomeComponent, ReactiveFormsModule, FormsModule, FooterComponent,NavbarComponent,],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'courses';
}
