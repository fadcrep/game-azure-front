import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'embed-iframe',
  templateUrl: './embed-iframe.component.html',
  styleUrls: ['./embed-iframe.component.scss']
})
export class EmbedIframeComponent implements OnInit {

  @Input() url : string;
  isLoading = true;
  constructor(public utilsService : UtilsService , private router: Router) { }

  ngOnInit(): void {
    
  }
  
  

}
