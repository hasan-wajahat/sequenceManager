import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {LoginData} from '../../object-classes/login-data'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {

  loginData;
  showError: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loginData = new LoginData(null, null);
    this.showError = false;
  }

  onSubmit() {
    this.authService.login(this.loginData.email, this.loginData.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['']);
        } else {
          this.loginData.email = '';
          this.loginData.password = '';
          this.showError = true;
        }
      });
  }
}
