import { Component, OnInit } from '@angular/core';
import { HeroService } from "../service/hero.service";
import { Router } from "@angular/router";
import { soal } from "../config";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public datas: soal[] = [];
  public loading = false;
  public userLogin;

  constructor(
    public service: HeroService,
    public router: Router
  ) {
    if(!localStorage.getItem('loginDida')){
      this.router.navigate(['login']);
    }else{
      let data = JSON.parse(localStorage.getItem('loginDida'));
      this.userLogin = data.username;
    }
  }

  ngOnInit() {
    this.getData();
  }

  async getData(){
    this.loading = true;
    this.service.getData('Soal')
    .subscribe(data => {
      this.datas = data.data;
      console.log(this.datas);
      this.loading = false;
    }, err => {
      this.loading = false;
      console.log(err);
    });
  }

  coomingSon(){
    alert('Belum ada apa-apaan ini, ngapain di klik !');
  }

  logout(){
    localStorage.removeItem('loginDida');
    this.router.navigate(['login']);
  }
}
