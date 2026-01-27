const targetDate = new Date("February 13, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) return;

  document.getElementById("days").innerText = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((diff / (1000 * 60 * 60)) % 24);
  document.getElementById("minutes").innerText = Math.floor((diff / (1000 * 60)) % 60);
  document.getElementById("seconds").innerText = Math.floor((diff / 1000) % 60);
}, 1000);

/* IMAGE ROTATION */
let imgIndex = 1;
setInterval(() => {
  imgIndex = imgIndex === 3 ? 1 : imgIndex + 1;
  document.getElementById("photo").src = `photo${imgIndex}.jpg`;
}, 4000);

/* PASSCODE */
function openPasscode() {
  document.getElementById("passOverlay").classList.remove("hidden");
}

function closePasscode() {
  document.getElementById("passOverlay").classList.add("hidden");
}

function checkPass() {
  const val = document.getElementById("passInput").value.trim();
  if (val === "SMILE-FIRST") {
    document.getElementById("passOverlay").classList.add("hidden");
    document.getElementById("giftOverlay").classList.remove("hidden");
  } else {
    alert("Wrong secret 💔");
  }
}

function closeGift() {
  document.getElementById("giftOverlay").classList.add("hidden");
}

