const body = document.getElementById("body");
let cellArray = [];

const grid_width = 10;
const grid_height = 15;
const cell_width = 15;
const cell_height = 10;
const cell_color = "dodgerblue";

for (let i = 0; i < grid_width * grid_height; ++i) {
    let cell = document.createElement("div");
    body.appendChild(cell);
    cell.classList.add("element");
    cell.style.width = cell_width + "px";
    cell.style.height = cell_height + "px";
    cell.style.left = cell_width * (i % grid_width) + "px";
    cell.style.top = cell_height * Math.floor(i / grid_width) + "px";
    cell.style.background = cell_color;
    cell.style.opacity = Math.floor(Math.random() * 40 + 15) + "%";
    cellArray.push(cell);
}