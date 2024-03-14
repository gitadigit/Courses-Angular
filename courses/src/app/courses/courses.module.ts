import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesRoutingModule } from './courses-routing.module';
import { AddCourseComponent } from './component/add-course/add-course.component';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { CoursesService } from './courses.service';
import { WayLearningPipe } from './way-learning.pipe';


@NgModule({
  declarations: [
    AddCourseComponent,
    AllCoursesComponent,
    CourseDetailsComponent,
    WayLearningPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CoursesRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule
  ],
  providers:[
    CoursesService,
  ],
  exports: [
    CoursesRoutingModule
  ],
//  bootstrap: [AppComponent]

})
export class CoursesModule { }
