import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public utilsService : UtilsService , private router: Router) { }
 gameUrl = 'user/dashboard/game'
  ngOnInit(): void {

    
  }

  goTogame(){
    if(localStorage.getItem('authorization')=='true'){
      this.router.navigateByUrl(this.gameUrl);
    }else {
      alert("Vous n'êtes pas autorisé à jour ce jeu" );
    }
  }
  
}
