import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeComponent implements OnInit{
  constructor( )
{}

  ngOnInit(): void {
    // Swal.bindClickHandler();
    // /* Bind a mixin to a click handler */
    // Swal.mixin({
    //   toast: true
    // }).bindClickHandler("data-swal-toast-template");
    
    
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  
    
    // Swal.fire({
    //   template: "#my-template"
    // });
  }
  // onLogout()
  // {
  //   console.log("logout")
  //   sessionStorage.setItem("user","")
  //   console.log("log-saa",sessionStorage.getItem("user"))

  // }

  
}
