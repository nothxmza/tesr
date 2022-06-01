import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    button!: string;
    count!: number;
    buttontest!:string;
    YN!: boolean;
    like!: string;
  //constructor() { }

  ngOnInit() {
    this.button = "http://localhost:3000/42";
    this.count = 1;
    this.buttontest = 'dislike';
    this.YN = true
    this.like = "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png";
  }

  onmore() {
    if(this.YN){
      this.buttontest = 'like';
      this.like = "https://img.freepik.com/vecteurs-libre/icone-facebook-like-longue-ombre-qui-air-simple-pouces-vers-haut_68708-504.jpg?w=360";
      this.YN = false;
    }
    else{
      this.like = "https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png";
      this.buttontest = "dislike"
      this.YN = true;
    }   
  }
}
