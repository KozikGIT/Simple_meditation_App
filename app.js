
let clock=0;
let video;
let music=1;
let choose_music=1;
let choose_time;
let  set_time=11;
const start_button=document.getElementById("start_button");

const mus1=document.getElementById("mus1");
const mus2=document.getElementById("mus2");
const audio1=new Audio("./sounds/beach.mp3");
const audio2=new Audio("./sounds/rain.mp3");
const value = document.getElementById("value")
const input = document.getElementById("input")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
 
  set_time=event.target.value;
if(start_button.disabled==true)
{
  start_button.onmouseover = function(e){
    start_button.style.opacity=30+"%"
}
start_button.onmouseout = function(e){
  start_button.style.opacity=100+"%"
}



  start_button.disabled=false;

  licz=0
  video.pause();
  choose_music.pause();
  document.getElementById("time_to_end").textContent="stop";
  document.getElementById("start_butt_img").src="./svg/play.svg"
  clearInterval(x);
}

})



start_button.addEventListener("click",()=>{
clock=0;
choose_time=set_time;


start_button.disabled=true;
if(start_button.disabled==true)
{
  start_button.style.opacity=100+"%"
  document.getElementById("start_butt_img").src="./svg/pause.svg"
}


if(music==1)
{
  audio1.play();
  choose_music=audio1;
  video=document.createElement("video")
  video.src="./video/beach.mp4";
  
}
if(music==2)
{
  audio2.play();
  choose_music=audio2;
  video=document.createElement("video")
  video.src="./video/rain.mp4";
}
video.muted = true;
  video.autoplay=true;
  video.loop=true;
  video.style.position="fixed"
  video.style.zIndex=-10;
  document.querySelector(".app").appendChild(video);


x=setInterval(setInterval_f,1000)

})

mus1.addEventListener("click",()=>{
  music=1;

})


mus2.addEventListener("click",()=>{
  music=2;

})







function setInterval_f()
{ clock++;
  
  document.getElementById("time_to_end").textContent=(choose_time*10)-clock;
 
  if(clock==(choose_time*10))
{console.log("koniec medytacji")
choose_music.pause();
document.getElementById("start_butt_img").src="./svg/play.svg"

start_button.disabled=false;

clearInterval(x);

}
 
}

// document.getElementById("how_use").addEventListener('mouseenter', (event) => {console.log("1")
// document.getElementById("how_use").textContent="Wybierz muzyke,wybierz czas, kliknij start, zmień czas aby zatrzymać"
// document.getElementById("how_use").style.fontSize=2+"px"

// });

// document.getElementById("how_use").addEventListener('mouseleave', (event) => {
//   console.log("2")

//   document.getElementById("use").src="./svg/pause.svg"

// });

