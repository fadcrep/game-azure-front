import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '../services/utils.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  activeLink: string;

  constructor(public utilsService: UtilsService, private router: Router) { }

  ngOnInit(): void {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setActiveLink(item: string) {
    this.activeLink = item;
  }

  logout() {
    localStorage.removeItem('userEmail');

    localStorage.removeItem('access_token');
    
    this.router.navigate(['']);
    this.activeLink = "home";
  }

  isLoggin(): boolean {
    return this.utilsService.isLoggedIn();
  }
}


