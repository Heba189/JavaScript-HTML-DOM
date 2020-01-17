//convert nodeList to array
var myImg = Array.from(document.querySelectorAll(".item img"));
console.log(myImg);
var lightBoxContainer =document.querySelector(".lightbox-container");
var close = document.getElementById("close");
var next = document.getElementById("right");
var prev = document.getElementById("left");

var currentIndex = 0;


//to add event-> AddEventListener >> that giving one elemnent not to array
//onclick over each img -> display lightbox-container as flex instead of none 
 for( var i=0; i<myImg.length ; i++){
     myImg[i].addEventListener('click', showLightBox);
 }
//fun to show lightboxContainer selected by querySelector
 function showLightBox(e){
     //first replace none by flex 
     lightBoxContainer.style.transform="scale(1,1)";
     
     lightBoxContainer.firstElementChild.style.transform ="scale(1,1)";
    var imgSrc = e.target.src;
        //search in all images about index of current img
    currentIndex =  myImg.indexOf(e.target);
    //return first child after lightbox-container
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+imgSrc+")";
 }

 //close icon to remove lightboxContainer

 close.addEventListener('click',hidelightbox);

 function hidelightbox(){
    lightBoxContainer.style.transform= "scale(0,0)";
 }
 

 //next function
next.addEventListener('click',goNext)
function goNext(){
    currentIndex ++;
    if(currentIndex == myImg.length){
        currentIndex = 0;
    }
    //send index of myImg to increase it in each click
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+myImg[currentIndex].src+")";

}

///prev fun.

prev.addEventListener('click',goprev)
function goprev(){
    currentIndex --;
    if(currentIndex < 0){
        currentIndex = myImg.length -1;
    }
    //send index of myImg to increase it in each click
    lightBoxContainer.firstElementChild.style.backgroundImage="url("+myImg[currentIndex].src+")";

}

//display with keyboard ->keycode

document.addEventListener("keydown",function(e){
    if(e.keyCode == 39){
        goNext();
    }
});

document.addEventListener("keydown",function(e){
    if(e.keyCode == 37){
        goprev();
    }
});

document.addEventListener("keydown",function(e){
    if(e.keyCode == 27){
       hidelightbox();
    }
});