import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddQueComponent } from 'src/app/component/admin-add-que/admin-add-que.component';
import { QuizComponent } from 'src/app/component/quiz/quiz.component';
import { ResultComponent } from 'src/app/component/result/result.component';
import { AuthGuard } from '../../auth.guard';
import { LoginComponent } from '../../component/login/login.component';
import { RegistrationComponent } from '../../component/registration/registration.component';
import { TestComponent } from '../../component/test/test.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {path:'test', component :TestComponent},
  {path:'quiz' , component : QuizComponent},
  {path:'result',component: ResultComponent},
  { path: 'admin', component: RegistrationComponent, canActivate: [AuthGuard] },
  {path:'admin-add-que',component:AdminAddQueComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
