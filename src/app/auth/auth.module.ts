import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SignupComponent, 
    LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[SignupComponent, LoginComponent]
})
export class AuthModule { }
