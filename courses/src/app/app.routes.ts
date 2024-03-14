import { Routes } from '@angular/router';
import { NoFoundComponent } from './no-found/no-found.component';

export const routes: Routes = [
{path: "", redirectTo: "home", pathMatch: "full" },
{path:"home",loadComponent:() => import('./home/home.component').then(c =>c.HomeComponent)},
{path: "course", loadChildren: () => import('./courses/courses.module').then(c => c.CoursesModule) },
{path: "user", loadChildren: () => import('./users/user.module').then(c => c.UserModule) },
{path: "**", component: NoFoundComponent }];



