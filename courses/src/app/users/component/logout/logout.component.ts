import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  // standalone: true,
  // imports: [],
  templateUrl: './logout.component.html',
  
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router){ }
  
  ngOnInit(): void {

    Swal.fire({
      title: "Are you sure you want to logut?",
      //text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "GoodBy🖐! ",
          // text: "Your file has been deleted.",
          icon: "success"
        });
        sessionStorage.setItem("user","")
        sessionStorage.setItem("lector","")
        this.router.navigate(['home'])
        
      }
      else {
        Swal.fire({
          title: "Cancellation 👍 ",
          // text: "Deletion process cancelled.",
          icon: "success"
        }
    )
    this.router.navigate(['course/all-courses'])
  };
  

  })}


}
