import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( private router: Router , public authService: AuthService) { }
 gameUrl = 'user/dashboard/game';
 startVmUrl = 'vm/start'
 show = true;
  ngOnInit(): void {

    
  }

  goTogame(){
    if(localStorage.getItem('authorization')=='true'){

      this.authService.startOrStopVm(this.startVmUrl).subscribe(
        response =>{
          console.log(response.status);
          this.show = false;
          setTimeout(() => {
            
            this.router.navigateByUrl(this.gameUrl);
          }, 45000);
        }
      )
      
    }else {
      alert("Vous n'êtes pas autorisé à jour ce jeu" );
    }
  }
  
}
