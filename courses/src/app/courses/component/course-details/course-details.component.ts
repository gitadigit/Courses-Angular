import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { Course, WayLearning } from '../../course.model';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.scss'
})
export class CourseDetailsComponent implements OnInit {

  public coursesId!: number
  public course!: any
  public isRegistered: boolean = false
  public categories!: any[];
  public lectuers!: any[];
  public currentLecture!: any
  public lecturesData!: any

  new: any;
  date: Date = new Date();
  editId: any;
  isEdit = false;
  lectureId: any;
  learnType = WayLearning

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _courseService: CoursesService,) { }

  ngOnInit(): void {

    const isLecture = sessionStorage.getItem("lector")
    this.activatedRoute.params.subscribe((params) => {
      this.editId = params['id'];
      this.coursesId = params['id'];
      this.lectureId = params['lectuerId'];
      this.lecturesData = sessionStorage.getItem("lector");
      if (this.lecturesData !== null) {
        this.currentLecture = JSON.parse(this.lecturesData);
      }
      this.currentLecture = this.currentLecture['id']
      if (this.lectureId == this.currentLecture) {
        this.isEdit = true;
      }

      this._courseService.getCourseById(this.coursesId).subscribe({
        next: (res) => {
          this.course = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    });
    const categoriesData = sessionStorage.getItem("categories");
    if (categoriesData !== null) {
      this.categories = JSON.parse(categoriesData);
    }
  }
  public editCoures(course: Course) {
    this.router.navigate(['course/add-coures', course])
  }

  isStartInNextWeek(startDate: any): boolean {
    if (!(startDate instanceof Date)) {
      startDate = new Date(startDate);
    }
    const today = new Date();
    const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    const isNextWeek = startDate.getTime() >= today && startDate.getTime() <= nextWeek;
    return isNextWeek;
  }

}