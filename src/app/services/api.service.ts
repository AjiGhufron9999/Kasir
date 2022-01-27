import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const API_URL="http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverUrl="http://localhost:3000/"


  constructor(private http:HttpClient) { }
  


  getAllBarang(){
    return this.http.get(this.serverUrl+'barang')
    
  }
  postBarang(url: string,data: any){
    return this.http.post(this.serverUrl+url,data)
  }
}
