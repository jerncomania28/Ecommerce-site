const menuBtn= document.querySelector('.menu-Btn');
const hamburger =document.querySelector('.menu-Btn_burger');
const nav = document.querySelector('.nav');





let showMenu=false;


menuBtn.addEventListener('click', toggleMenu);




function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        
       

//    console.log("there's an error here");

     showMenu=true;
    }
    else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    
        

        showMenu=false;
    }
}







//  variable declaration
const img=[];
let i=0;
const time=4000;



// popolating array 

img[0]='./img/rolex4.jpg';
img[1]='./img/rolex5.jpg';
img[2]='./img/rolex6.jpg';
img[3]='./img/rolex7.jpg';
img[4]='./img/rolex8.jpg';


function imageTransitioning(){
    document.slide.src=img[i];
     
    if( i===img.length-1){
        i=0;
    }
    else{
        i++;
    }

   setTimeout("imageTransitioning()",time);

}

window.onload=imageTransitioning;


