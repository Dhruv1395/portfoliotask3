var menu =document.getElementById("btn");
var cross=document.getElementById("close");
var tl = gsap.timeline();
tl.to("#sidebar",{
    right:0
});

tl.from("#sidebar h4",{
    x:200,
    duration:0.8,
    stagger:0.28,
    opacity:0
})

tl.from("#sidebar i",{
    opacity:0
})

tl.pause();
menu.addEventListener("click",function(){
    tl.play();
})
cross.addEventListener("click",function(){
    tl.reverse();
})