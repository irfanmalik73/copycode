function navigation(){
    var b1=document.querySelector(".button")

    b1.addEventListener("mouseenter",function(){
        
        gsap.to(".button i",{
            backgroundColor:"#0DA34E",
            paddingLeft:"1vw",
            left:"16.1%"
        })
        gsap.to(".button p",{
            left:"0%",
            color:"#0DA34E",
        })
    })
    b1.addEventListener("mouseleave",function(){
        gsap.to(".button i",{
           paddingLeft:"7.7vw",
           left:"-50%",
        })
        gsap.to(".button p",{
            left:"10%",
            color:"white",
        })
    })
    
    
    gsap.from("nav .line",{
        scrollTrigger:{
            trigger:".line",
            start:"top 10%",
            end:"top -10%",
            scrub:1,
        },
        y:10,
        opacity:0,
    })
    
    gsap.to("nav",{
        scrollTrigger:{
            trigger:".line",
            start:"top 10%",
            end:"top -10%",
            scrub:1,
        },
        
        height:"8vh",
    })
    
    
}
navigation()
//crsur
function cruser(){
    var video=document.querySelector(".video")

    video.addEventListener("mousemove",function(elm){
        
        gsap.to(".box",{
            top:elm.y-100,
            left:elm.x-200,
            duration:0.5,
        })
    })
    video.addEventListener("mouseenter",function(elm){
        
        gsap.to(".box",{
            opacity:1,
            duration:0.5,
            top:elm.y-90,
            left:elm.x-100,
            scale:1,
        })
    })
    video.addEventListener("mouseleave",function(elm){
        
        gsap.to(".box",{
            opacity:0,
            duration:0.1,
            scale:0,
        })
    })
    
}
cruser()

//video animation
function videoPlaying(){
    const videoContainers = document.querySelectorAll('.c1');

  // Har container ke andar video dhoondo aur event lagao
  videoContainers.forEach(container => {
    const video = container.querySelector('video');
    
    if (video) {
      container.addEventListener('mouseenter', () => {
        video.currentTime = 0;
        video.play();
      });

      container.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });

}
videoPlaying();

//smooth scrolling
function smooth(){
    const lenis = new Lenis();


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

}
smooth();


//page4 video animation
function animation(){
  const videoContainers = document.querySelectorAll('.img-video');

videoContainers.forEach(container => {
  const video = container.querySelector('video');
  if (video) {
    container.addEventListener('mouseenter', () => {
      // Video chalu karo
      video.currentTime = 0;
      video.play();
      

    gsap.to(container,{
        top:"25%",
        duration:0.5,
    })
    gsap.to(video,{
        top:"0%",
        duration:0.5,
    })

    
    
    });

    container.addEventListener('mouseleave', () => {
      // Video band karo
      video.pause();
      video.currentTime = 0;

      

      gsap.to(container,{
        top:"50%",
        duration:0.5,
    })
    gsap.to(video,{
        top:"-15%",
        duration:0.5,
    })
    });
  }
});


}
animation();




gsap.to(".text-img",{
  scrollTrigger:{
    trigger:".text-img",
    start:"top 5%",
    end:"top -10%",
    pin: ".text-box",
    pinSpacing: false,
    
  },
  
})



