import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { isExistGuard } from './is-exist.guard';
import { AllCoursesComponent } from './component/all-courses/all-courses.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { AddCourseComponent } from './component/add-course/add-course.component';

const CoursesRoutes: Routes = [
  {path: '', redirectTo: 'all-courses', pathMatch: 'full' },
  {path:"all-courses",component:AllCoursesComponent },
  {path:"course-detail",component:CourseDetailsComponent, canActivate: [isExistGuard] },
  {path:"add-coures",component:AddCourseComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(CoursesRoutes)
  ],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
