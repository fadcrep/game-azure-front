import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'embed-iframe',
  templateUrl: './embed-iframe.component.html',
  styleUrls: ['./embed-iframe.component.scss']
})
export class EmbedIframeComponent implements OnInit {

  @Input() url : string;
  constructor() { }

  ngOnInit(): void {
  }

}
