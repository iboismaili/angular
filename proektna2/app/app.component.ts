import { Component } from '@angular/core';
import {model} from './model';
import {item} from './model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  naslov(){
    return {
      'text-align' : 'center',
      'color' : 'black',
      'margin-top': '5%',
      'background-color':'white',
      
      
     };

  }

  vnimavaj(){
    return {

      'text-align' : 'center',
      'color' : 'black',
      'margin-top': '5%',
      'background-color':'white',
      
    };
  }

  
  title = 'Proekt2';

  data = [
 
 { name:"Marlboro Touch"},
 { name:"Marlboro Gold"},
 { name:"Pallma"},
 { name:"HEETS yellow selection"},
 { name:"West Tvrdo "},
 { name:"BOSS"},
 { name:"57 Classic"},
 { name:"Sobranie"},
 { name:"OME 1"},
 { name:"HEETS laguna"},
 { name:"OME 3"},
 { name:"Parlament Dark"},
 { name:"West classic"},
 { name:"Camel Sivo"},
 { name:"Bonston"},
 { name:"Parlament Aqua blue"},
 { name:"Marlboro Crno Crveno"},
 { name:"OME 2"},
 { name:"Marlboro crveno"},
 { name:"Chesterfield Plavo"},
 { name:"Rofmans"},
 { name:"Camel clasic"},
 { name:"HEETS rozevo"},
 { name:"Winston plavo"},
 { name:"Kent"},
 { name:"Winston Silver"},
 { name:"Parlament slims"},
 { name:"Eva slims"},
 { name:"Winston slims"},
 { name:"Bohems"},
 

  ];
  searchText=''; 

  model = new model();

  getvalue(value:any){
   if(value!=""){
      this.model.items.push(new item(value));
   }
  }

  getitem(){
    return this.model.items;
  }

  
  narac(){
  window.alert("Cigarite se naraceni !");
  }
}
