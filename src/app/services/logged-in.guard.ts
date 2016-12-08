import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './authentication.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['login']);
      return false
    } else {
      return true;
    }
  }
}
