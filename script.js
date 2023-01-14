var clap = new Audio("clap.mp3");
var error = new Audio("error.mp3");
var heartbeat = new Audio("heart beat.wav");
var house_beat = new Audio("house_beat.mp3");
var mixkit = new Audio("mixkit-arcade-retro-game-over-213.wav");
var cinematic = new Audio("mixkit-cinematic-transition-swoosh-heartbeat-trailer-488.wav");
var alarm = new Audio("mixkit-classic-alarm-995.wav");
var rocket = new Audio("mixkit-fast-rocket-whoosh-1714.wav");
var netflix = new Audio("netflix-intro.mp3");

document.addEventListener(
  "keydown",
  (event) => {
    let name = event.key;
    key(name);
  },
  false
);

async function key(key){
    if(key == "A" || key == "a"){
        clap.play();
        document.getElementById("clapp").classList.add("active");
        document.getElementById("clapp").classList.remove("but");
        await delay(4000);
        document.getElementById("clapp").classList.remove("active");
        document.getElementById("clapp").classList.add("but");
    }
    if (key == "S" || key == "s") {
      error.play();
      document.getElementById("error").classList.add("active");
      document.getElementById("error").classList.remove("but");
      await delay(1000);
      document.getElementById("error").classList.remove("active");
      document.getElementById("error").classList.add("but");
    }
    if (key == "D" || key == "d") {
      heartbeat.play();
      document.getElementById("heart").classList.add("active");
      document.getElementById("heart").classList.remove("but");
      await delay(1000);
      document.getElementById("heart").classList.remove("active");
      document.getElementById("heart").classList.add("but");
    }
    if (key == "F" || key == "f") {
      mixkit.play();
      document.getElementById("retro").classList.add("active");
      document.getElementById("retro").classList.remove("but");
      await delay(1000);
      document.getElementById("retro").classList.remove("active");
      document.getElementById("retro").classList.add("but");
    }
    if (key == "G" || key == "g") {
      house_beat.play();
      document.getElementById("beat").classList.add("active");
      document.getElementById("beat").classList.remove("but");
      await delay(8000);
      document.getElementById("beat").classList.remove("active");
      document.getElementById("beat").classList.add("but");
    }
    if (key == "H" || key == "h") {
      alarm.play();
      document.getElementById("alarm").classList.add("active");
      document.getElementById("alarm").classList.remove("but");
      await delay(5000);
      document.getElementById("alarm").classList.remove("active");
      document.getElementById("alarm").classList.add("but");
    }
    if (key == "J" || key == "j") {
      rocket.play();
      document.getElementById("rocket").classList.add("active");
      document.getElementById("rocket").classList.remove("but");
      await delay(4000);
      document.getElementById("rocket").classList.remove("active");
      document.getElementById("rocket").classList.add("but");
    }
    if (key == "K" || key == "k") {
      netflix.play();
      document.getElementById("netflix").classList.add("active");
      document.getElementById("netflix").classList.remove("but");
      await delay(4000);
      document.getElementById("netflix").classList.remove("active");
      document.getElementById("netflix").classList.add("but");
    }
    if (key == "K" || key == "l") {
      cinematic.play();
      document.getElementById("cinematic").classList.add("active");
      document.getElementById("cinematic").classList.remove("but");
      await delay(8000);
      document.getElementById("cinematic").classList.remove("active");
      document.getElementById("cinematic").classList.add("but");
    }
}

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}