import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logindata: any;
  message:any;
  apidata: any;
 formdata:any;

 
  constructor(private api: ApiService, private route: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem("login")==null){
      this.api.post("gettoken", null).subscribe((result:any)=>{
        localStorage.setItem("token", result.token);
         
          });
    }

    this.logindata = new FormGroup({
      email: new FormControl("", Validators.compose([Validators.required,Validators.email])),
      password: new FormControl("", Validators.compose([Validators.required]))
    });
  }

  login(data: any) {

   this.api.get("login").subscribe((result:any)=>{
      console.log(this.apidata);
      if(result.status == "failed"){ 
        this.apidata = result; 

      }

       if(result.status=="success"){
        console.log(result);
        this.apidata = result; 
        // localStorage.setItem("email", this.apidata.data.email);
        localStorage.setItem("login", JSON.stringify(result.login));
        this.route.navigate(['master/home']);
       } 
        else {
             alert("Invalid Credentials");
            }
    });
    
    // let x = this.api.post("login", data);//data  
    // x.subscribe((result:any) => {
    //   this.apidata = result;
    //   console.log(this.apidata);

    //   if (this.apidata.data.email != null && this.apidata.data.usertype != null) {
    //     localStorage.setItem("email", this.apidata.data.email);
    //     localStorage.setItem("usertype", this.apidata.data.usertype);
    //     this.route.navigate(['/master/home'])
    //   }
    //   else {
    //     alert("Invalid Credentials");
    //   }

    // });

  }

}
