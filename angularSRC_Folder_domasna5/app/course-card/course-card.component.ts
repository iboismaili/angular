import { Component,EventEmitter,Input,OnInit, ɵbypassSanitizationTrustScript } from '@angular/core';

import { COURSES } from 'src/db-data';
import { Course ,suzi} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit  {
  @Input()
  title:string =" ";

  @Input()
  course:Course=suzi;

  
   @Input()
   cardIndex:number=0;

  
  constructor(){}
  ngOnInit (){

  }

  klikniButon(){
      window.open("https://angular.io/");
     
  }
      cardStyles(){
        return {'text-decoration' : 'underline red',
                'background-color' : 'aqua',
               };
      }

      




}
