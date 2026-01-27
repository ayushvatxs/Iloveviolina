/* PHOTO SLIDER */
const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];
let pIndex = 0;
setInterval(() => {
  pIndex = (pIndex + 1) % photos.length;
  document.getElementById("slider").src = photos[pIndex];
}, 3500);

/* COUNTDOWN */
const target = new Date("Feb 13, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  document.getElementById("days").innerText = Math.floor(diff / (1000*60*60*24));
  document.getElementById("hours").innerText = Math.floor(diff / (1000*60*60) % 24);
  document.getElementById("mins").innerText = Math.floor(diff / (1000*60) % 60);
  document.getElementById("secs").innerText = Math.floor(diff / 1000 % 60);
}, 1000);

/* GIFT */
const gift = document.getElementById("gift");
const overlay = document.getElementById("overlay");
const bgMusic = document.getElementById("bgMusic");
const sparkle = document.getElementById("sparkleSound");

gift.onclick = () => {
  bgMusic.volume = 0.4;
  bgMusic.play().catch(()=>{});

  sparkle.volume = 0.6;
  sparkle.currentTime = 0;
  sparkle.play();

  showMessage();
};

/* MESSAGE */
function showMessage() {
  overlay.style.display = "flex";
  const text = "Every day with you feels like magic. Your smile, your warmth, your presence — they make the world softer, kinder, and infinitely more beautiful 💗";
  const target = document.getElementById("loveText");
  target.innerHTML = "";
  let i = 0;

  const typing = setInterval(() => {
    target.innerHTML += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 35);
}

function closeOverlay() {
  overlay.style.display = "none";
}

