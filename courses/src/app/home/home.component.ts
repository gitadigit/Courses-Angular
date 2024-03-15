import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';


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

  }

  
}
