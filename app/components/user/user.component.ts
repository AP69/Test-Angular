import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //this is the model
name:string;
age:number;
email:string;
adress:Address;
hobbies:string[];
posts:Post[];
isEdit:boolean = false;

  constructor(Private DataService, DataService) { 
    console.log('constructor ran...'); 
  }
 

  ngOnInit() {
    console.log('ngOnInit ran..');

    this.name = 'Rogier Dalma';
    this.age = 30;
    this.email = 'rd@gmail.com';
    this.adress = {
      street: '50 main street',
      city: 'Boston',
      state: 'MA'
    }
    this.hobbies = ['writing code', 'reading', 'making art'];
    
    this.DataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });

  }
  onClick() {
    console.log('Hello');
    this.hobbies.push('new hobby');
  }
  addhobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift('hobby');
    return false;
  }

  deleteHobby() {
    for(let i=0;i <this.hobbies.length;i++) {
      if(this.hobbies[i] == 'hobby') {
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !.isEdit;
  }
 } 
interface Address{
  street:string,
  city:string,
  state:string 
}

interface Post {
id:number,
title:string,
body:string,
userid:number
}
