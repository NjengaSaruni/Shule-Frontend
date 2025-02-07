import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    standalone: false
})
export class SignupComponent {
    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_again: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    onSubmit(): void {
        if (this.signupForm.valid) {
            console.log('Form Submitted!', this.signupForm.value);
        }
        console.log('submitting')
    }

    ngOnInit(): void {
        // Initialization logic here
    }
}