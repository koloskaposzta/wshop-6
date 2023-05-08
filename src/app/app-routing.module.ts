import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ApiService } from './api.service';
import { SubjectCreationComponent } from './subject-creation/subject-creation.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [ApiService] },
  { path: 'logout', component: LogoutComponent  ,canActivate: [ApiService]},
  { path: 'register', component: RegisterComponent  ,canActivate: [ApiService]},
  {path: 'create-subject', component: SubjectCreationComponent  ,canActivate: [ApiService]},
  { path: 'list-subjects', component: SubjectListComponent  ,canActivate: [ApiService]},
  { path: 'list-teachers', component: TeacherListComponent  ,canActivate: [ApiService]},
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
