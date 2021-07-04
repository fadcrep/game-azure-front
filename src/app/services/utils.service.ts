import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router) { }


  _getRawConfig() {
    return window['__WT_APP_CONFIG__'];
  }

  getApiUrl() {
    return this._getRawConfig().apiBaseUrl;
  }

  routeNavigate(path: string) {
    this.router.navigateByUrl('/' + path);
  }

  getJwtToken() {
    return localStorage.getItem('accessToken');
  }

  isLoggedIn() {
    let jwtHelper = new JwtHelperService();
    let token = localStorage.getItem('access_token');
    if (!token) {
      return false;
    } else if (token) {
      let isExpired = jwtHelper.isTokenExpired(token);
      return !isExpired;
    }
  }


  logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('access_token');
    
    this.router.navigate(['']);
  }
}
