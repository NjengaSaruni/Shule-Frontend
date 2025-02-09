import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SignupService {

    private signupUrl = 'http://localhost:8000/users/create/';

    constructor(private http: HttpClient) { }

    signup(userData: any): Observable<any> {
        return this.http.post<any>(this.signupUrl, userData).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error('An error occurred:', error);
                return throwError(() => error);
            })
        );
    }
}