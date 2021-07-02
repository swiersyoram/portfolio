import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api.yoramswiers.be';
  constructor(private http: HttpClient, private router: Router) {
    console.log('hello');

    this.authclient();
  }
  authclient() {
    let body = {
      identifier: 'client@yoramswiers.be',
      password: 'client123',
    };
    this.http.post(this.url + '/auth/local', body).subscribe(
      (data) => {
        console.log(data);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        this.router.navigate(['/error']);
      }
    );
  }
}
