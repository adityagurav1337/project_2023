
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
 
export class ApiService {

  baseurl = "http://localhost:8081/";

  constructor(private http : HttpClient) {

    

  }


  post(url : string, data: any ){
    return this.http.post(this.baseurl + url, data);
 }
  
  get(url: string) {
    return this.http.get(this.baseurl + url);
  }

  put(url: string, data: any) {
    return this.http.put(this.baseurl + url, data);
  }

  delete(url: string) {
    return this.http.delete(this.baseurl + url);
  }

  logout(){
    localStorage.clear();  
    // this.routes.navigate()
  }



}
