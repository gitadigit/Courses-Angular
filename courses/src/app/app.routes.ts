import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { isExistGuard } from './courses/is-exist.guard';
import { RegisterComponent } from './users/component/register/register.component';
import { UserModule } from './users/user.module';
import { NofoundComponent } from './nofound/nofound.component';

export const routes: Routes = [
{path: "", redirectTo: "home", pathMatch: "full" },
{path:"home",loadComponent:() => import('./home/home.component').then(c =>c.HomeComponent)},
{path: "course", loadChildren: () => import('./courses/courses.module').then(c => c.CoursesModule) },
{path: "user", loadChildren: () => import('./users/user.module').then(c => c.UserModule) },

{path: "**", component: NofoundComponent }];



