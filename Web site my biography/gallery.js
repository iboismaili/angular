
  
document.querySelectorAll('.image-container img').forEach(image =>{
image.onclick=()=> {
    document.querySelector('.popup-image').style.display='flex';
    document.querySelector('.popup-image img').src=image.getAttribute('src');
    }

});

var a=document.getElementById('x') 
 a.addEventListener('click',function(){
    document.querySelector('.popup-image').style.display='none';
 })

  const likeBtn=document.querySelector(".like_btn");
  let likeIcon=document.querySelector("#icon");
  let count=document.querySelector("#count");

   let clicked=false;

  likeBtn.addEventListener('click', ()=> {
if(!clicked){
    clicked=true;
    likeIcon.innerHTML=`<i class="fas fa-thumbs-up">`
    count.textContent++;
}
else {
    clicked=false;
    likeIcon.innerHTML=`<i class="far fa-thumbs-up">`
    count.textContent--;
}

  });

  var feild=document.querySelector('textarea');
  var backUp=feild.getAttribute('placeholder');
  var btn=document.querySelector(".btn");
  var clear=document.getElementById('clear');

  feild.onfocus=function(){
      this.setAttribute('placeholder','');
      this.style.borderColor='#333';
      btn.style.display='block';
  }

   feild.onblur=function(){
       this.setAttribute('placeholder', backUp);
   }
   clear.onclick=function(){
       btn.style.display='none';
       feild.value='';
   }

   




