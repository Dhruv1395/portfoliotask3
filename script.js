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
gsap.from("#services .shadow",{
    opacity:0,
    x:-300,
    stagger:0.3,
    duration:0.5,
    scrollTrigger:{
        trigger:"#services",
        scroller:"body",
        markers:"true",
        end:"bottom 90%",
        scrub:2
    }
})
gsap.from("#layout .content2 .over img",{
    y:40,
    scrollTrigger:{
        trigger:"#layout .over img",
        scroller:"body",
        markers:true,
        scrub:2

    }
})
