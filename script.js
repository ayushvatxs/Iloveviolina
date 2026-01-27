let q = 0;

const questions = [
  {
    q: "Who is the cutest girl in the world? 😍",
    options: ["Angel", "Princess", "You ❤️"]
  },
  {
    q: "Who makes my day better every time?",
    options: ["Coffee", "Music", "You 🫶"]
  },
  {
    q: "Who owns my heart?",
    options: ["Nobody", "Maybe someone", "YOU 💖"]
  },
  {
    q: "Final answer to everything in my life?",
    options: ["Luck", "Dreams", "You ❤️"]
  }
];

function next() {
  if (q < questions.length) {
    document.getElementById("question").innerText = questions[q].q;
    let html = "";
    questions[q].options.forEach(o => {
      html += `<button onclick="next()">${o}</button>`;
    });
    document.getElementById("options").innerHTML = html;
    q++;
  } else {
    document.getElementById("question").innerHTML =
      "Congratulations 🎉<br><br>The answer to everything…<br><strong>IS YOU ❤️</strong><br><br>— From someone who loves you";
    document.getElementById("options").innerHTML = "";
  }
}

function toggleMusic() {
  let m = document.getElementById("bgMusic");
  m.paused ? m.play() : m.pause();
}
