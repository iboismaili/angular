 
var start=document.getElementById("start");
var pozicija=document.querySelectorAll('.squares');

  function ouch(){
      return window.alert("ouch !! i zajak i zelka se naogjaat vo ista pozicija ,  stisni okey za da produlzi igrata");
  }
  function pobednikzelka(z){
      return window.alert("podednik e zelka so boda" + z + " pravi restart stranata za novata igra " );

  }
  function pobednikzajak(z){
    return window.alert("podednik e zajak so boda" + z + " pravi restart stranata za novata igra " );

}
 function dvizenjezelka(num){
      pozicija[num].style.backgroundColor="blue";
 }
 function dvizenjezajak(num){
     pozicija[num].style.backgroundColor="green";
}




  function randomnum(){
    return Math.floor(Math.random() * 10); 
  }


 var zelka =0; 
 var zajak=0;
 var z1,z2;

    

    function zelkascore(num){
      
    if(num>=1 && num <=5){
        zelka+=3;
        dvizenjezelka(zelka);
        document.getElementById("zelka").innerHTML = "zelka BLUE score : " + zelka;
    }else if(num>=6  &&  num <=7){
        zelka-=6;
        if(zelka<0){
            zelka=0;
            dvizenjezelka(zelka);
            document.getElementById("zelka").innerHTML = "zelka BLUE score : " + zelka;
            
        }
        dvizenjezelka(zelka);
        document.getElementById("zelka").innerHTML = "zelka BLUE score : " + zelka;
    }else if(num>=8 && num<=10){
        zelka+=1;
        dvizenjezelka(zelka);
        document.getElementById("zelka").innerHTML = "zelka BLUE score : " + zelka;
    }
    if (zelka>70){
        dvizenjezelka(69);
        pobednikzelka(zelka);
    }

   return zelka;
    }




        function zajakscore(num){
           
        if(num>=1 && num<=2){
           dvizenjezajak(zajak);
            document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;  
        }else if(num==3){
            zajak=zajak-12;
            if(zajak<0){
                zajak=0;
                dvizenjezajak(zajak);
                document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;
            }
            dvizenjezajak(zajak);
            document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;
        }else if(num>=4 && num<=5){
            zajak+=9;
            dvizenjezajak(zajak);
            document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;
        }else if(num>=6 && num<=8) {
            zajak+=1;
            dvizenjezajak(zajak);
            document.getElementById("zajak").innerHTML = "zajak GREEN score: " + zajak;
        }
        else if(num>=9 &&  num<=10) {
            zajak-=2;
              if(zajak<0){
                  zajak=0;
                  dvizenjezajak(zajak);
                  document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;
              }
              dvizenjezajak(zajak);
            document.getElementById("zajak").innerHTML = "zajak GREEN score : " + zajak;
        }

        if(zajak>70){
            dvizenjezajak(69);
            pobednikzajak(zajak);
        }
        
        
        return zajak;
    
        }
    



start.addEventListener('click',function(){

    


    var timerVariable = setInterval(countUpTimer, 1000);

     var totalSeconds = 0;

    function countUpTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds / 3600);
   var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);
  document.getElementById("count_up_timer").innerHTML = hour + ":" + minute + ":" + seconds;

}

  setInterval(function(){

   var num=randomnum();
   

   zelkascore(num);
   zajakscore(num);


   if(zajakscore()==zelkascore()){
       ouch();
   }



  },1000);

   

});



 




