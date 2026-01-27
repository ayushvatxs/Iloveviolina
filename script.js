/* TIMER */
const target = new Date("Feb 13, 2026 00:00:00").getTime();
setInterval(() => {
  const now = Date.now();
  const diff = target - now;
  if (diff < 0) return;

  d.textContent = Math.floor(diff / 86400000);
  h.textContent = Math.floor(diff / 3600000) % 24;
  m.textContent = Math.floor(diff / 60000) % 60;
  s.textContent = Math.floor(diff / 1000) % 60;
}, 1000);

/* IMAGE ROTATION */
let i = 1;
setInterval(() => {
  i = i === 3 ? 1 : i + 1;
  photo.src = `photo${i}.jpg`;
}, 3500);

/* PASSCODE FLOW */
function openPass() {
  if (sessionStorage.getItem("opened")) return;
  passModal.classList.remove("hidden");
}

function closePass() {
  passModal.classList.add("hidden");
}

function unlockGift() {
  if (pass.value === "SMILE-FIRST") {
    sessionStorage.setItem("opened", "yes");
    passModal.remove();
    giftOverlay.classList.remove("hidden");
    startHearts();
  } else {
    alert("Wrong secret 💔");
  }
}

function closeGift() {
  giftOverlay.classList.add("hidden");
}

/* HEART PARTICLES */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.getElementById("heartContainer").appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 250);
}
