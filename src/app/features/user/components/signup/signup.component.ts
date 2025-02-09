import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: false
})
export class SignupComponent {
    signupForm: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private signupService: SignupService
    ) {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_again: ['', [Validators.required, Validators.minLength(6)]],
        });
        this.signupForm.get('password_again')?.valueChanges.subscribe(() => {
            if (this.signupForm.get('password')?.value !== this.signupForm.get('password_again')?.value) {
                this.signupForm.get('password_again')?.setErrors({ passwordMismatch: true });
            } else {
                this.signupForm.get('password_again')?.setErrors(null);
            }
        });
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            this.signupService.signup(this.signupForm.value).subscribe(
                response => {
                    console.log('Signup successful', response);
                },
                error => {
                    console.error('Signup failed', error);
                }
            );
        }
    }

    ngOnInit(): void {
        // Initialization logic here
    }
}