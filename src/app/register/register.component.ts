import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username;
  public email;
  public phone;
  public password;
  public showPass: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  register(){
    if(!this.username){
      alert('Anda belum mengisi username');
    }else if(!this.email){
      alert('Anda belum mengisi email');
    }else if(!this.phone){
      alert('Anda belum mengisi phone');
    }else if(!this.password){
      alert('Anda belum mengisi password');
    }else{
      alert('Username : '+this.username+' - Email : '+this.email+' - Phone : '+this.phone+' - Password : '+this.password);
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
