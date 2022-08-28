console.log("Loading");
let leftsec=300;
let countleft=10;
function startTimer(duration, display) {
    let timer = duration;
    setInterval(function () {
        // minutes = parseInt(timer / 60, 10);
        // seconds = parseInt(timer % 60, 10);

        // minutes = minutes < 10 ? "0" + minutes : minutes;
        // seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = timer;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
AFRAME.registerComponent('markerhandler', {
    init: function () {
        this.el.sceneEl.addEventListener('markerFound', () => {
        console.log("Marker found");
        const count_display = document.querySelector('#countleft');  
        countleft=countleft -1;
        count_display.textContent = countleft;
      })
    }
  });
window.onload = function () {
    const gamestart = document
      .querySelector(".gameStart")
      .addEventListener("click", function () { 
      display = document.querySelector('#timeleft');  
      startTimer(leftsec, display);
      document.getElementById("gameStart").classList.add("displaynone")
       document.getElementById('player').load();
       document.getElementById('player').play();
      });
};

