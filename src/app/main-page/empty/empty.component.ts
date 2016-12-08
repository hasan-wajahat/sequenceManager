import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/authentication.service'

@Component({
  selector: 'app-empty',
  templateUrl: 'empty.component.html',
  styleUrls: ['empty.component.css'],
  providers: [AuthService]
})
export class EmptyComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['login']);
  }

  logOut(){
    this.authService.logout();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

}
