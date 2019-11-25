import { Component, OnInit } from '@angular/core';
import { HeroService } from "../service/hero.service";
import { Router } from "@angular/router";

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
  public loading = false;

  constructor(
    public service: HeroService,
    public router: Router
  ) { }

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
      this.loading = true;
      let data = {
        'username': this.username,
        'email': this.email,
        'noTelp': this.phone,
        'password': this.password
      }
      this.service.postData('Auth/register', data)
      .subscribe(data => {
        this.loading = false;
        console.log(data);
        localStorage.setItem('loginDida', JSON.stringify(data.data));
        this.router.navigate(['home']);
      }, err => {
        console.log(err);
        this.loading = false;
        alert('Anda gagal register, mohon periksa koneksi internet atau mungkin kerna email sudah ada yang pakai');
      });
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
