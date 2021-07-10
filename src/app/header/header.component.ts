import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  stopVmUrl = 'vm/stop'
  activeLink: string;

  constructor(public utilsService: UtilsService, private router: Router , public authService: AuthService) { }

  ngOnInit(): void {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setActiveLink(item: string) {
    this.activeLink = item;
  }

  logout() {
    this.authService.startOrStopVm(this.stopVmUrl).subscribe(
      response =>{
        console.log(response.status);
      }
    )
    localStorage.removeItem('userEmail');

    localStorage.removeItem('access_token');
    
    this.router.navigate(['']);
    this.activeLink = "home";
  }

  isLoggin(): boolean {
    return this.utilsService.isLoggedIn();
  }
}


