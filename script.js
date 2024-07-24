var image=document.querySelector("#image");
var like=document.querySelector("like");
var bigHeart=document.querySelector("#big-heart");
var like=document.querySelector("i");
var i=0;
// for(i=0; i<2; i++){
image.addEventListener("dblclick",function(){
    
    bigHeart.style.opacity="100%";
    bigHeart.style.color="red";
    bigHeart.style.fontSize="150px";
    bigHeart.style.transition="0.3s";
    like.style.color="red";
    setTimeout(function(){
        bigHeart.style.opacity="0%";
        bigHeart.style.color="red";
        bigHeart.style.fontSize="0px";
        bigHeart.style.transition="none";
        
    },1000);
    setTimeout(function(){
            bigHeart.style.opacity="0%";
            bigHeart.style.color="red";
            bigHeart.style.fontSize="0px";
            like.style.color="black";
            bigHeart.style.transition="0 s";
        },500);
});

//
// i=0;


// image.addEventListener("dblclick",function(){
//         bigHeart.style.opacity="100%";
//         bigHeart.style.color="red";
//         bigHeart.style.fontSize="150px";
//         bigHeart.style.transition="0.3s";
//         like.style.color="red";
//     })
//     setTimeout(function(){
//         bigHeart.style.opacity="0%";
//         bigHeart.style.color="red";
//         bigHeart.style.fontSize="0px";
//         // bigHeart.style.transition="0.3s";
//     },1500);
//     i=0;
