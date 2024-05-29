
var menu =document.getElementById("btn");
var cross=document.getElementById("close");
var tl = gsap.timeline();
tl.to("#side",{
    height:50,
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

gsap.from("#home .icon i,#home h1,#home .box",{
    x:-100,
    stagger:0.28,
    duration:0.5,
    delay:0.1,
    opacity:0,
    
})
gsap.from("#services h1,#services h3",{
    x:-400,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:"#services",
        scroller:"body",
        start:"top 80%"
    }
})
gsap.from("#services .shadow",{
    opacity:0,
    scale:0,
    stagger:0.3,
    duration:0.5,
    scrollTrigger:{
        trigger:"#services",
        scroller:"body",
        end:"bottom 90%",
        scrub:5
    }
})
gsap.from("#showcase h1",{
    x:-400,
    opacity:0,
    duration:0.9,
    scrollTrigger:{
        trigger:"#showcase",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from("#showcase .img",{
    scale:0,
    opacity:0,
    duration:0.5,
    scrollTrigger:{
        trigger:"#showcase img",
        scroll:"body",
        scrub:3,
        start:"top 160%"
    }
})
gsap.from("#layout .content2 .over img",{
    y:40,
    scrollTrigger:{
        trigger:"#layout .over img",
        scroller:"body",
        scrub:2

    }
})
