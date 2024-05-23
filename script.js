const texts = [
  "Welcome To My Website",
  "I am",
  "Junior Web Developer",
  "Open to work",
];
let currentIndex = 0;
let isTyping = true;

function typeText() {
  const textContainer = document.getElementById("text-container");
  const currentText = texts[currentIndex];
  let currentIndexChar = 0;

  const interval = setInterval(() => {
    textContainer.textContent += currentText[currentIndexChar];
    currentIndexChar++;

    if (currentIndexChar === currentText.length) {
      clearInterval(interval);
      setTimeout(() => {
        deleteText();
      }, 1000); // Change delay as needed
    }
  }, 100); // Change speed as needed
}

function deleteText() {
  const textContainer = document.getElementById("text-container");
  const currentText = texts[currentIndex];
  let currentIndexChar = currentText.length - 1;

  const interval = setInterval(() => {
    textContainer.textContent = currentText.slice(0, currentIndexChar);
    currentIndexChar--;

    if (currentIndexChar === -1) {
      clearInterval(interval);
      currentIndex = (currentIndex + 1) % texts.length;
      setTimeout(() => {
        typeText();
      }, 1000); // Change delay as needed
    }
  }, 50); // Change speed as needed
}

typeText();

var icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/assets/sun.png";
  } else {
    icon.src = "/assets/moon.png";
  }
};

// var icon = document.getElementById("icon");

// icon.onclick = function () {
//   document.body.classList.toggle("dark-theme1");
//   if (document.body.classList.contains("dark-theme1")) {
//     icon.src = "/assets/sun.png";
//   } else {
//     icon.src = "/assets/moon.png";
//   }
// };
