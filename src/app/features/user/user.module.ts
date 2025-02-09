import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupService } from './components/signup/signup.service';
import { provideHttpClient, withInterceptorsFromDi, withFetch } from '@angular/common/http';

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        UserRoutingModule
    ],
    providers: [
        SignupService,
        provideHttpClient(withInterceptorsFromDi(), withFetch())
    ]
})
export class UserModule { }