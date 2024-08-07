import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService : AuthService) { }

  lottieOptions: any;

  ngOnInit() {
    this.lottieOptions = {
      path: 'assets/exit.json',
      renderer: 'svg',
      loop: true,
      autoplay: true
    };
  }

 public async logout(){
  await this.authService.logout();
 }
}
