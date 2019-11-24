import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username;
  public password;
  public showPass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  login(){
    if(!this.username){
      alert('Anda belum mengisi username');
    }else if(!this.password){
      alert('Anda belum mengisi password');
    }else{
      alert(this.username+' - '+this.password);
    }
  }

  controlPass(showPass){
    if(showPass == false){
      this.showPass = true
    }else{
      this.showPass = false;
    }
  }
}
