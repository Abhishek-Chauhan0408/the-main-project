function init()
{
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

 


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();



}

init()
 








var scroll1=document.querySelector("#scroll");
var overlay1=document.querySelector("#overlay1");
overlay1.addEventListener('mouseenter',function(){
    scroll1.style.scale=1;
})
overlay1.addEventListener('mouseleave',function(){
    scroll1.style.scale=0;
})
overlay1.addEventListener('mousemove',function(dets){
    scroll1.style.left=`${dets.x-40}`+'px';
    scroll1.style.top=`${dets.y-38}`+'px';
})



gsap.to("#page2 img",{
    rotate:-10,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 img",
        start:"top 190%",
        // markers:true,
        scrub:1
       
    }
    // x:-900,
 
})

// gsap.to("svg",{
//   scale:1,
//   top:"1.2%",
//   fill:"#111",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"svg",
//     start:"top 45%",
//     end:"top -50%",
//     markers:true,
//     scrub:true,
   
//   }
// })
// gsap.to("#nav",{
//   color:"#111",
//   background:"linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
//   scrollTrigger:{
//     scroller:"#main",
//     trigger:"#nav h3",
//     markers:"true",
//     start:"top 100%",
//     end:"top -100%",
//     scrub:true
//   }
// })



var tl=gsap.timeline({
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    // markers:"true",
    start:"top 45%",
    end:"top -50%",
    scrub:true,
}
});

tl.to("svg",{
  scale:1,
  top:"5%",
  fill:"#111",
  // pin:"top 10%",
  
})

tl.to("#nav",{
  color:"#111",
  background: "linear-gradient(#ffffffeb,#ffffff6e,#ffffff00)",
  
})

var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:"svg",
    scroller:"#main",
    // markers:"true",
    start:"top -290%",
    end:"top -290%",
    scrub:true,
}
});
tl2.to("svg",{
  scale:1,
  top:"5%",
  fill:"#fff",

})
tl.to("#nav",{
  color:"#fff",
  background: "linear-gradient(#000000d5,#00000089,#00000000)",
  
})

var scroll1=document.querySelector(".scroll1");
var overlay1=document.querySelector("#overlay2");
overlay1.addEventListener('mouseenter',function(){
    scroll1.style.scale=1;
})
// overlay1.addEventListener('mouseleave',function(){
//     scroll1.style.scale=0;
// })
overlay1.addEventListener('mousemove',function(dets){
    scroll1.style.left=`${dets.x}`+'px';
    scroll1.style.top=`${dets.y-15}`+'px';
})


var page4=document.querySelector("#page4");
var image=document.querySelector("#page4>img");
var btn4=document.querySelector("#page4>button");
page4.addEventListener("mousemove",function(dets)
{
    image.style.left=(dets.x-120) + 'px';
    image.style.top=(dets.y-50) + 'px';

    btn4.style.left=(dets.x-80) + 'px';
    btn4.style.top=(dets.y+130) + 'px';
})

// var elem=document.querySelectorAll(".elem")
// elem.forEach(function(e){
//    var a = e.getattribute("data-img")
//    e.addEventListener("mouseenter",function(){
//     document.querySelector("#page4>img").setAttribute("src",a);
//    })
// })

var elem = document.querySelectorAll(".elem")
elem.forEach(function(e){
    var a = e.getAttribute("data-img")
    e.addEventListener("mouseenter",function(){
        document.querySelector("#page4>img").setAttribute("src",a)
    })
})

gsap.from("#img11",{
  rotation:-10, 
  // duration:.5,
  
  scrollTrigger:{
    trigger:"#img11",
    scroller:"#main",
    start:"top 20%",
   //  markers:true,
    scrub:true
   }
})
gsap.from("#page61",{
    //  delay:1,
   scrollTrigger:{
    trigger:"#page61",
    scroller:"#main",
    start:"top 0%",
    pin:true,
    scrub:true
   
   }
})
 


gsap.from("#img22",{
  y:800,
  // delay:1,
  scrollTrigger:{
   trigger:"#img11",
   scroller:"#main",
   start:"top 50%",
  //  markers:true,
   scrub:2
  }
})

var csr=document.querySelector("#crsr");
var page7=document.querySelector("#page7");
page7.addEventListener("mousemove",function(dets){
     csr.style.left=dets.x+"px";
     csr.style.top=dets.y+"px";
     csr.style.opacity= 1;
})
page7.addEventListener("mouseleave",function(dets){
  csr.style.left=dets.x+"px";
  csr.style.top=dets.y+"px";
  csr.style.opacity= 0;
})







$('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });

 
gsap.from("#page2 h1",{
    onStart:function(){
      $('#page2 h1').textillate({ in: { effect: 'fadeInUp',delayScale:0.5 } });
    },
    scrollTrigger:{
         trigger:"#page2 h1",
         scroller:"#main",
         start:"top 90%"
    }
})
gsap.from("#page2 h2",{
  onStart:function(){
    $('#page2 h2').textillate({ in: { effect: 'fadeInUp',delayScale:0.5 } });
  },
  scrollTrigger:{
       trigger:"#page2 h2",
       scroller:"#main",
       start:"top 130%",
         
  }
})
gsap.from("#page3 h1",{
  onStart:function(){
    $('#page3 h1').textillate({ in: { effect: 'fadeInUp',delayScale:0.5 } });
  },
  scrollTrigger:{
       trigger:"#page3 h1",
       scroller:"#main",
       start:"top 160%",
         
  }
})
gsap.from("#page5 h1",{
   
  onStart:function(){
    $('#page5 h1').textillate({ in: { effect: 'fadeInUp',delayScale:3} });
  },
  scrollTrigger:{
       trigger:"#page5 h1",
       scroller:"#main",
       start:"top 180%",
         markers:true
  }
})


gsap.from("#page7 h2",{
  onStart:function(){
    $('#page7 h2').textillate({ in: { effect: 'fadeInUp',delayScale:2 } });
  },
  scrollTrigger:{
       trigger:"#page7 h2",
       scroller:"#main",
       start:"top 290%",
       markers:true
  }
})
// gsap.from("#page3 h2 span",{
//   onStart:function(){
//     $('#page3 h2 span').textillate({ in: { effect: 'fadeInUp',delayScale:0.5 } });
//   },
//   scrollTrigger:{
//        trigger:"#page3 h2 span",
//        scroller:"#main",
//        start:"top 160%",
         
//   }
// })

// #page3 h1 span