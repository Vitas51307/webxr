import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  baseURI: string = document.baseURI
  constructor() { }

  ngOnInit(): void {
  }

}
