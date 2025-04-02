const btn = document.getElementById("button");
const images = ["images/1.gif", "images/2.gif", "images/3.gif", "images/4.gif"];
let index = 0;
let intervalId = null; // Store the interval so it doesn't start multiple times

function cycleImages() {
  const container = document.getElementById("container");
  container.innerHTML = `<img src="${images[index]}" alt="GIF" style="width:100%;">`;
  index = (index + 1) % images.length;
}

btn.addEventListener("click", () => {
  if (!intervalId) {
    // Prevent multiple intervals from running
    cycleImages(); // Show first image immediately
    intervalId = setInterval(cycleImages, 3000); // Start cycling images
  }
});
