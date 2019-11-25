import { Component, OnInit } from '@angular/core';
import { HeroService } from "../service/hero.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email;
  public password;
  public showPass: boolean = false;
  public loading = false;

  constructor(
    public service: HeroService,
    public router: Router
  ) {
    localStorage.removeItem('loginDida');
  }

  ngOnInit() {
  }

  login(){
    if(!this.email){
      alert('Anda belum mengisi email');
    }else if(!this.password){
      alert('Anda belum mengisi password');
    }else{
      this.loading = true;
      let data = {
        'email': this.email,
        'password': this.password
      }
      this.service.postData('Auth/login', data)
      .subscribe(data => {
        this.loading = false;
        console.log(data);
        localStorage.setItem('loginDida', JSON.stringify(data.data));
        this.router.navigate(['home']);
      }, err => {
        this.loading = false;
        alert('Anda gagal login');
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
