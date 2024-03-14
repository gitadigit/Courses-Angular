import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router){ }
  
  ngOnInit(): void {

    Swal.fire({
      title: "Are you sure you want to logut?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "GoodBy🖐! ",
          icon: "success"
        });
        sessionStorage.setItem("user","")
        this.router.navigate(['home'])
      }
      else {
        Swal.fire({
          title: "Cancellation 👍 ",
          icon: "success"
        }
    )
    this.router.navigate(['course/all-courses'])
  };
  })}
}
