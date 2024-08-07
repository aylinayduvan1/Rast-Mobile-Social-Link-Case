import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LinksService } from '../../services/link/links.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post<any>('http://localhost:5000/api/login', { username: this.username, password: this.password })
      .subscribe(
        response => {
          if (response.message === 'Login successful') {
            localStorage.setItem('isLoggedIn', 'true');
            this.router.navigate(['/links']);
          }
        },
        error => {
          console.error('Login failed', error);
        }
      );
  }
}
