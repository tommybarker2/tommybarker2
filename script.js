const body = document.getElementById("body");
let cellArray = [];
const quoteArray = " the quick brown fox jumps over the lazy dog";

const grid_width = 5;
const grid_height = 10;
const cell_width = 160;
const cell_height = 80;
const cell_size_variability = 80;
const cell_position_variability = 30;

for (let i = 0; i < grid_width * grid_height; ++i) {
    let cell = document.createElement("div");
    body.appendChild(cell);
    cell.classList.add("cell");
    cell.style.position = "absolute";

    let cell_width_fudge = rand(0, cell_size_variability);
    let cell_height_fudge = rand(0, cell_size_variability);
    let cell_left_fudge = rand(0, cell_position_variability);
    let cell_top_fudge = rand(0, cell_position_variability);
    cell.style.width = cell_width + cell_width_fudge + "px";
    cell.style.height = cell_height + cell_height_fudge + "px";
    cell.style.left = cell_width * (i % grid_width) + cell_left_fudge + "px";
    cell.style.top = cell_height * Math.floor(i / grid_width) + cell_top_fudge + "px";
    
    let rand_red = rand(100, 225);
    let rand_green = rand(100, 255);
    let rand_blue = rand(100, 255);
    let rand_alpha = rand(60, 80);
    cell.style.background = rgb(rand_red, rand_green, rand_blue, rand_alpha);

    let random = Math.random();
    let emoticonArray = [":D", ":)", ":3", ":I", ":O", ":P", ":(", ":V", ":J", ":|", ":/", ":>", ":]", ":0"];
    for (let k = 0; k < emoticonArray.length; ++k) {
        if (random < (k + 1) / emoticonArray.length) {
            cell.innerText = emoticonArray[k];
            break;
        }
    }

    cellArray.push(cell);
}

function rand(min, max) {
    return Math.random() * (max - min) + min;
}

$(".cell").click(function() {

    let cell_width_fudge = rand(0, cell_size_variability);
    let cell_height_fudge = rand(0, cell_size_variability);

    let width = cell_width + cell_width_fudge + "px";
    let height = cell_height + cell_height_fudge + "px";

    let rand_red = rand(120, 225);
    let rand_green = rand(150, 255);
    let rand_blue = rand(150, 255);
    let rand_alpha = rand(40, 80);

    let color = rgb(rand_red, rand_green, rand_blue, rand_alpha);

    let random = Math.random();
    let emoticon = "ERROR";
    let emoticonArray = [":D", ":)", ":3", ":I", ":O", ":P", ":(", ":V", ":J", ":|", ":/", ":>", ":]"];
    for (let k = 0; k < emoticonArray.length; ++k) {
        if (random < (k + 1) / emoticonArray.length) {
            emoticon = emoticonArray[k];
            break;
        }
    }

    setTimeout(() => {typeWriter(0, $(this), quoteArray)}, 1000);

    $(this).animate({height: "+=50px", fontSize: "0px"}, 1000, function() {

        //$(this).text(quoteArray);
        $(this).text("");
        $(this).css("font-size", "30px");

    }).animate({fontSize: "30px"}, 5000).animate({height: "0px"}, 1000, function() {

        $(this).css("font-size", "0px");
        $(this).text(emoticon);
        //$(this).css("font-size", "60px");
        $(this).css("background-color", color);

    }).animate({height: height, width: width, fontSize: "+=60px"}, 1000);
});

function rgb(red, green, blue, alpha) {
    return `rgb(${red}, ${green}, ${blue}, ${alpha}%)`;
}

function typeWriter(i, selector, text) {
    if (i < text.length) {
        console.log(selector.innerText);
        selector.append(text.substring(i, i+1));
        ++i;
        setTimeout(() => {typeWriter(i, selector, text)}, 30);
    }
}