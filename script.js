var menu =document.getElementById("btn");
var cross=document.getElementById("close");
var tl = gsap.timeline();
tl.to("#side",{
    height:100,
    display:"block",
    duration:0.5,
    display:"flex",
    alignItems:"center"
});

tl.from("#side h4",{
    x:200,
    duration:0.8,
    stagger:0.28,
    opacity:0
})

tl.from("#side i",{
    opacity:0
})

tl.pause();
btn.addEventListener("click",function(){
    tl.play();
})
cross.addEventListener("click",function(){
    tl.reverse();
})
