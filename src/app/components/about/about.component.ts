import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myUsers: Users;
  constructor() { 
    console.log(this.myUsers)
  }

  ngOnInit() {
  }

}

export class Users{
    username?: string;
    email?: string;
    password?: string;
    confirm?: string;

}