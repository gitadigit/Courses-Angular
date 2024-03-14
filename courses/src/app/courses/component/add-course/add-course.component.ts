import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../courses.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent implements OnInit {
  public edit: any;
  public addCourseForm!: FormGroup
  public categories!: any[];
  public coursesEdit!: any[];
  public editId!: number;
  public selectedCategoryId!: number;
  public lectuers!: any[]
  private selectedIndex!: number
  private selectedIndexCategory!: number
  private selectedLecturerId!: number
  private selectedCatogoryId!: number
  public inputArray: string[] = [""];
  public inputArrayControls: FormControl[] = [];
  public changes: boolean[] = [false, false];

  constructor(private router: Router, private _courseService: CoursesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.editId = params['id'];
      this.edit = params;
    });

    this._courseService.getCategoryFromServer().subscribe({
      next: (res) => {
        this.categories = res;
        sessionStorage.setItem("categories", JSON.stringify(res))
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish');
      }
    })

    const lectureData = sessionStorage.getItem("lecturs");
    if (lectureData !== null) {
      this.lectuers = JSON.parse(lectureData);
      console.log(this.lectuers)
    }

    this.addCourseForm = new FormGroup({
      'name': new FormControl(this.edit ? this.edit.name : "", [Validators.required, Validators.minLength(3)]),
      'categoryId': new FormControl(this.edit ? this.edit.categoryId : "", Validators.required),
      'startDate': new FormControl(this.edit ? this.edit.startDate?.slice(0, 10) : "", [Validators.required]),
      'amountLesson': new FormControl(this.edit ? this.edit.amountLesson : 0, [Validators.required, Validators.min(1), Validators.pattern(/^[0-9]+$/)]),
      'syllabus': new FormControl(this.edit ? this.edit.syllabus : ""),
      'WayLearning': new FormControl(this.edit ? this.edit.WayLearning : 0, Validators.required),
      'lectuerId': new FormControl(this.edit ? this.edit.lectuerId : 0, Validators.required),
      'image': new FormControl(this.edit ? this.edit.image : "", Validators.required)
    });

    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));
  }

  public onSelectionCatogoryChanged(event: any): void {
    this.selectedIndexCategory = event.target.selectedIndex;
    this.selectedCatogoryId = this.categories[this.selectedIndexCategory].id;

  }
  public onSelectionChanged(event: any): void {
    this.selectedIndex = event.target.selectedIndex;
    this.selectedLecturerId = this.lectuers[this.selectedIndex].id;

  }
  public addCourse() {
    let course: any = this.addCourseForm.value
    course.lectuerId = this.selectedLecturerId
    course.categoryId = this.selectedCatogoryId
    course.syllabus = this.inputArray;
    this._courseService.postCourseFromServer(course).subscribe({
      next: (res) => {
        Swal.fire({
          title: "Add",
          text: "You course add successfully!",
          icon: "success"
        });
        this.router.navigate(['course/all-courses'])
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  public addInput(control: FormControl, i: number) {
    i++;

    if (this.changes[i] && this.inputArray[i] !== control.value) {
      this.inputArray[i] = control.value;

      if (this.inputArray[i] === "") {
        control.setValue(this.inputArray[i + 1]);

        for (let j = i; j < this.inputArray.length - 1; j++) {
          this.inputArray[j] = this.inputArray[j + 1];
          this.inputArrayControls[j] = this.inputArrayControls[j + 1];
        }

        this.inputArray.pop();
        this.inputArrayControls[this.inputArrayControls.length - 1] = new FormControl('')
      }

      console.log("Value changed and updated");
    } else if (this.changes.length > i && !this.changes[i]) {
      this.inputArray.push(control.value);
      this.changes.push(false);
      this.inputArrayControls.push(new FormControl(''));
      console.log("New input added");
    }

    console.log("The updated array:", this.inputArray);
    this.changes[i] = true;
  }

  public saveCourse() {

    let course: any = this.addCourseForm.value
    course.id = this.editId
    course.lectuerId = this.selectedLecturerId
    course.categoryId = this.selectedCatogoryId
    course.syllabus = this.inputArray;
    this._courseService.puttCourseFromServer(course).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['course/all-courses']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  public cancelCourse() {
    this.router.navigate(['course/all-courses'])
  }
}
