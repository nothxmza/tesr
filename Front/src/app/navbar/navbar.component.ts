import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    button!: string;
  //constructor() { }

  ngOnInit() {
    this.button = "http://localhost:3000/42";
  }

}
