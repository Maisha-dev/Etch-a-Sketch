const container = document.querySelector(".container");

const squares = [];

for (let i = 0; i < 256; i++) {
  const squareDiv = document.createElement("div");

  squareDiv.classList.add("square");

  container.appendChild(squareDiv);

  squares.push(squareDiv);
}

squares.forEach((square) => {
  square.addEventListener("mouseenter", function () {
    this.classList.add("hovered");
  });
});
