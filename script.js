const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mouse(){
    window.addEventListener("mousemove",function(dets)
    {
        let x=dets.clientX;
        let y=dets.clientY; 
        document.querySelector('#minicircle').style.transform=`translate(${dets.clientX }px,${dets.clientY }px)`;
    })
}
mouse();


function transition(){
    var tl=gsap.timeline();
     tl.from('#nav',{
     y:'10',
     opacity:0,
     duration :1,
     ease:Expo.easeInOut
})
tl.to('.bounding-elem',{
    y:0,
   delay:-1,
    duration :1.5,
    ease:Expo.easeInOut,
    stagger:.3
})
tl.from("#hero-footer",{
    y:0,
   opacity:0,
    duration :1.2,
    ease:Expo.easeInOut,
    stagger:.3,
    delay:-1
})
}


transition();

document.querySelectorAll(".element").forEach(function(element){
  var rotate=0;
  var difference_rotate=0;
    element.addEventListener("mousemove",function(dets){
         var diff= dets.clientY- element.getBoundingClientRect().top;
         difference_rotate=dets.clientX-rotate;
         rotate=dets.clientX;
        
       gsap.to(element .querySelector("div img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate: gsap.utils.clamp(-20,20,difference_rotate)
       })
    });
    element.addEventListener("mouseleave",function(dets){
        
       
      gsap.to(element.querySelector("div img"),{
       opacity:0,
       ease:Power3,
      
      })
   });
});

let time =document.getElementById("time");
setInterval(()=>{
    let d=new Date();
time.innerHTML=d.toLocaleTimeString();
},1000)


const dropdown = document.querySelector('.dropdown');
const menu = document.querySelector('.menu');
const button = document.querySelector('.dropdown button');
button.addEventListener('click', toggleMenu);
function toggleMenu() {
  button.classList.toggle('active');
  if(menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.add('show');
  }
}
document.querySelectorAll('.menu a').forEach(item => {
  item.addEventListener('click', toggleMenu);
})
