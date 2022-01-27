import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoginDaftarInterface } from './login-daftar.component.interface';

@Component({
  selector: 'app-login-daftar',
  templateUrl: './login-daftar.component.html',
  styleUrls: ['./login-daftar.component.css']
})
export class LoginDaftarComponent implements OnInit {

  data : LoginDaftarInterface[]=[]
  login_username:string="";
  login_password:string="";
  daftar_username:string=""
  daftar_nama:string=""
  daftar_password:string=""
  user:any={}
  hide:boolean=true
  loading:boolean=false

  constructor(
    public api:ApiService,
    public router:Router

  ) { 

  }


  ngOnInit(): void {

  }

  daftar(){
    this.loading=true
  }

  login(){
    
  }

}
