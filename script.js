let blockNumber = 16;
let currentColor = "black";

const gridInput = document.querySelector("#gridSize");
const submit = document.querySelector("#gridSizeSubmit");
const alert = document.querySelector("#alertMessage");
const clear = document.querySelector("#clear");
const blue = document.querySelector("#blue");
const black = document.querySelector("#black");
const red = document.querySelector("#red");
const eraser = document.querySelector("#eraser");

let createBlock = (blockNumber) => {
  const container = document.querySelector(".container");

  container.innerHTML = "";

  for (let i = 0; i < blockNumber; i++) {
    const blocks = document.createElement("div");
    blocks.style.border = "0px solid grey";
    blocks.classList.add("blocks");

    container.appendChild(blocks);

    for (let j = 0; j < blockNumber; j++) {
      const box = document.createElement("div");
      box.classList.add("box");

      box.addEventListener("mouseenter", () => {
        box.style.backgroundColor = currentColor;
      });

      blocks.appendChild(box);
    }
  }
};

createBlock(blockNumber);

submit.addEventListener("click", () => {
  if (parseInt(gridInput.value) >= 2 && parseInt(gridInput.value) <= 99) {
    alert.textContent = "";
    createBlock(gridInput.value);
  } else {
    alert.textContent = "Enter a number between 2 and 99";
  }
});

clear.addEventListener("click", () => {
  alert.textContent = "";
  createBlock(16);
});

let getColor = document.querySelectorAll('input[name="button"]');
getColor.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    currentColor = e.target.value;
  });
});
