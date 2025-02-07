import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule
    ]
})
export class UserModule { }