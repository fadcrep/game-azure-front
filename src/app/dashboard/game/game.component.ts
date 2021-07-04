import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }
  url: string = "http://40.115.124.211";
  redirectUrl= 'home'
  ngOnInit(): void {
  }

}
