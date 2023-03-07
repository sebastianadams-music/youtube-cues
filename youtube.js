 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementById('script_1');
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


 var playerOne;
 var playerThree;

 const fadeOut = [
  { opacity: .95  },
  { opacity: 0.1 },
  ]

  const fadeIn = [
    { opacity: 0.1  },
    { opacity: .95 },
    ]
  

const fadeTiming = {
  duration: 5000,
  iterations: 1,
  fill: "forwards"

}

let idArray = []


let submit = document.getElementById("submit")

submit.addEventListener("click", onSubmit, false)
var counter = 0
sequencer()

function sequencer(){
  console.log("sequencer ran")

  idArray.length > 0 ? playNextVideo() : document.getElementById("listempty").textContent = " No more videos. Add more to list."

  setTimeout(sequencer, 6000)

}

function playNextVideo() {

  document.getElementById("listempty").textContent = ""

  if (counter < 1) {
  console.log(counter, "counter")
  const video = idArray.shift()
  console.log("play next video", video)
  playerTwo.loadVideoById(video)
  setTimeout( () => {
    fadeOutPlayer("player3-container")
    fadeInPlayer("player2-container")
  }, 600) // delay to allow video to load before it fades in
  
  

  counter = 1
  
  } 
  else {
  console.log(counter, "counter")
  const video = idArray.shift()
  console.log("play next video", video)
  playerThree.loadVideoById(video)
  setTimeout( () => {
    fadeOutPlayer("player2-container")
    fadeInPlayer("player3-container")
  }, 600) // delay to allow video to load before it fades in
  counter = 0

  
  }

}

function onSubmit(){
  let text = document.getElementById("linkdrop").value
  document.getElementById("linkdrop").value = ""
  let ID = (YouTubeGetID(text))
  console.log(ID)
  ID ? idArray.push(ID) : console.log("not an ID")
  console.log(idArray)
}
// filters links and returns the YouTube ID (or undefined if not YouTube link)
function YouTubeGetID(url){
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  console.log("url", url)
  return undefined !== url[2]?url[2].split(/[^0-9a-z_\-]/i)[0]:url[0];
}

 function fadeOutPlayer(player) {
  document.getElementById(player).animate(fadeOut, fadeTiming)
  console.log("faded out", player)
  // Promise.all(document.getElementById(player).getAnimations().map((animation) => animation.finished))
  // .then(
  // () =>   {
  //         console.log("fade out finished for", player)});
 }

 function fadeInPlayer(player) {
  document.getElementById(player).animate(fadeIn, fadeTiming)
  console.log("faded in", player)
  // Promise.all(document.getElementById(player).getAnimations().map((animation) => animation.finished))
  // .then(
  // () =>   {
  //         console.log("fade in finished for", player)});

 }

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 function onYouTubeIframeAPIReady() {

   playerTwo = new YT.Player('player2', {
 height: '390',
 width: '640',
 videoId: 'rswxcDyotXA',
 playerVars: {
   'playsinline': 1
 },
 events: {
   //'onReady': onPlayerReady,
  //  'onStateChange': onPlayerStateChange
 }
}
);

playerThree = new YT.Player('player3', {
     height: '390',
     width: '640',
     videoId: 'm9CXsDEHxlo', 
     playerVars: {
       'playsinline': 1,
      

     },
     events: {
       //'onReady': onPlayerReady,
       // 'onStateChange': onPlayer3StateChange
     }
   });

 }



