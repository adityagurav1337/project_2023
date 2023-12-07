import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private route: Router){ }
  
  ngOnInit(): void {
    
  }
 
  logout(){
    localStorage.clear();
    this.route.navigate(['/'])
 }

}
