import { steps, restaurant } from "./data.js";
import { createHeart } from "./effects.js";

const text = document.getElementById("main-text");
const nextBtn = document.getElementById("next-btn");
const finalButtons = document.getElementById("final-buttons");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const finalMessage = document.getElementById("final-message");

const restaurantName = document.getElementById("restaurant-name");
const maps = document.getElementById("maps");

let step = 0;

// corazones constantes
setInterval(createHeart, 300);

nextBtn.addEventListener("click", () => {
  step++;

  if (step < steps.length) {
    text.innerText = steps[step];
  } else {
    text.innerText = "¿Quieres ser mi SA Valentín? 💘";
    nextBtn.classList.add("hidden");
    finalButtons.classList.remove("hidden");
  }
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

yesBtn.addEventListener("click", () => {
  finalButtons.classList.add("hidden");
  text.classList.add("hidden");
  finalMessage.classList.remove("hidden");

  restaurantName.innerText = restaurant.name;
  maps.src = restaurant.mapsUrl;

  // lluvia extra de corazones
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 100);
  }
});
