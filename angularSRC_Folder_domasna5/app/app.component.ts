import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { suzi } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses=COURSES;

  angularpozadina(){
    return {
    'background-color' : 'blue'
   };
  }

  klikniCarta(){
    alert("klikni View Course za povekje "); 
  }





}
