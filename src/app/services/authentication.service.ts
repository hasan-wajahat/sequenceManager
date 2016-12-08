import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class AuthService{
  private loggedIn = false;
  private server = 'http://localhost:3000/auth_user';

  constructor(private http: Http){
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login(email:string, password:string){
    let credentials = {'email': email, 'password': password};
    return this.http.post(this.server, credentials).map(
      res=>{
        let response = res.json();
        if(response.status){
          localStorage.setItem('auth_token', response.auth_token);
          this.loggedIn = true;
        }
        return response.status
      }
    );
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    this.loggedIn = !!localStorage.getItem('auth_token');
    return this.loggedIn;
  }
}
