import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cow',
  templateUrl: './cow.component.html',
  styleUrls: ['./cow.component.scss']
})
export class CowComponent implements OnInit {
  baseURI: string = document.baseURI

  constructor() { }

  ngOnInit(): void {
  }

}
