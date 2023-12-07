import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  formdata: any;
  users: any;
  result: any;
  firstname: any;
  id = 0;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.id = 0;
    this.api.get("users").subscribe((result: any) => {
    this.result = result.data;
    console.log(this.result);
  
  });

    this.formdata = new FormGroup({
      id: new FormControl(this.id),
      name: new FormControl(""),
      mobileno: new FormControl(""),
      password: new FormControl(""),
      city: new FormControl(""),
      age: new FormControl("")
    });
  }

  // Search(){
  //   if(this.firstname == ""){
  //     this.ngOnInit();
  //   }else{
  //     this.users = this.users.filter(res =>{
  //       return res.firstname.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase())
  //     })
  //   }
  // }
}
