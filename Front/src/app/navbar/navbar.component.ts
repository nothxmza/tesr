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
    this.button = "https://api.intra.42.fr/oauth/authorize?client_id=93a51ab9c1c831667478ac9193ef5a53d303e7addf76a1cd2ec9df93ced58ba2&redirect_uri=http%3A%2F%2Flocalhost%3A4200&response_type=code";
  }

}
