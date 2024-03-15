import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import { WayLearning } from '../../course.model';
import Swal from 'sweetalert2';

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
  currentDate = new Date();

  new: any;
  date: Date = new Date();
  editId: any;
  isEdit = false;
  lectureId: any;
  learnType = WayLearning
  lectur!:string;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private _courseService: CoursesService,) { }

  ngOnInit(): void {

    
    this.activatedRoute.params.subscribe((params) => {
      this.editId = params['id'];
      this.coursesId = params['id'];
      this.lectureId = params['lectuerId'];
      const lecturesData = sessionStorage.getItem("lector");
      if (lecturesData !== null) {
        this.currentLecture = JSON.parse(lecturesData);
        this.lectur=this.currentLecture['name']
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
  public editCoures(course: any) {
    this.router.navigate(['course/add-coures', course])
  }
  isDateWithinWeek(startDate: Date): boolean {
    const today = new Date();
    const oneWeek = new Date();
    oneWeek.setDate(oneWeek.getDate() + 7);
    return startDate <= oneWeek && startDate >= today;
  }



}
