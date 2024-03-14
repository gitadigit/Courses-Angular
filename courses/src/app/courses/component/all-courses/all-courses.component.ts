import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})

export class AllCoursesComponent implements OnInit{

  public courses!: any[];
  public categories!: any[];
  public filteredCourses!: any[];
  // private categoryIndex!:number;
  private categoryValue!:string;
  // private selectedCategoryEvent!:any;
  public nameValue!: string;
  public selectedCategoryId!: number;
  private CatogoryIdIndex!:number;
  public selectedCategory: any; 

  constructor(private router: Router, private _courseService: CoursesService) { }

  ngOnInit(): void {
    this._courseService.getCoursesFromServer().subscribe({
      next: (res) => {
        this.courses = res
        this.filteredCourses = this.courses;
        console.log(this.courses)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish');
      }
    })  
    const categoriesData =sessionStorage.getItem("categories"); 
    if (categoriesData !== null) {
      this.categories = JSON.parse(categoriesData);}
  }

 public detailCourse(c:any){
  this.router.navigate(['course/course-detail/',c])
 }

 filterName(event:any):void{
  const name = event.target.value;
  this.nameValue = name; 
}

filterCategory(event: any): void {
  this.CatogoryIdIndex = event.target.selectedIndex;
  this.categoryValue = this.categories[this.CatogoryIdIndex].name;
}

filterCourses() {
  const name =this.nameValue;
  const category = this.categoryValue 
  this.filteredCourses = this.courses.filter(course => {
    let included: boolean = true;
    let isIncluded = true; 

    if (name) {
      isIncluded = included && course.name.toLowerCase().includes(name.toLowerCase());
    }

    if (category) { 
      isIncluded = included && course.categoryId === this.CatogoryIdIndex;
    }

    if(name===null && category=== null)
      isIncluded  
    return isIncluded;
  });
}


}