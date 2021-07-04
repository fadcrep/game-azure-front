import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild  {

  constructor( private router: Router){

  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canActivate(childRoute, state)
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let jwtHelper = new JwtHelperService();
      let token = localStorage.getItem('access_token');
      if (!token) {
        this.router.navigate(['/']);
        return false;
        
      } else if (token) {
        let isExpired = jwtHelper.isTokenExpired(token);
        return !isExpired;
      }

       // not logged in so redirect to login page with the return url
    this.router.navigate(['/signin'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  
}
