import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Practise Code';

  count=0;
  counter(type:string){
    type === 'add' ? this.count++ : this.count--;
  }

name='komal';
  d=false;
  t=true;
  condition="yes";
  color="r";
  sw_case="b";

  user=['abc','xyz','pqr'];
  user_detail=[
    {name : 'abc', id:'123',dept:'SE'},
    {name : 'xyz', id:'124',dept:'ASE'},
    {name : 'pqr', id:'125',dept:'ISE'},
  ]

  uDetail=[
    {name:'abc' ,social:['ig','fb']},
    {name:'abc' ,social:['wa','fb']},
    {name:'abc' ,social:['ig','lk']}, 
  ]

  clr="red";
  bgclr="green";

  updateColor(){
    this.clr="blue";
    this.bgclr="red";
  }

  userInfo :any={};//why any but not ngForm
  getData(data : NgForm){ //ngform yes
    console.warn(data);
    this.userInfo=data;
  }

  toggle=false;

  onToggle(){
    this.toggle=!(this.toggle)
  }
}
