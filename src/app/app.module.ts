import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AppRoutingRoutingModule } from './Modules/app-routing/app-routing-routing.module';
import { TestComponent } from './component/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { QuizComponent } from './component/quiz/quiz.component';
import{HttpClientModule} from '@angular/common/http';
import { ResultComponent } from './component/result/result.component';
import { TempformComponent } from './tempform/tempform.component';
import { AdminAddQueComponent } from './component/admin-add-que/admin-add-que.component';
// import { authInterceptorProviders } from './_helpers/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TestComponent,
    NavbarComponent,
    FooterComponent,
    QuizComponent,
    ResultComponent,
    TempformComponent,
    AdminAddQueComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingRoutingModule,
    MDBBootstrapModule.forRoot(),
    
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
