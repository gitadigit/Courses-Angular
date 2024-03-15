import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WayLearningPipe } from './way-learning.pipe';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [CommonModule, RouterOutlet, HomeComponent, ReactiveFormsModule, FormsModule, FooterComponent,NavbarComponent ],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'courses';
}
