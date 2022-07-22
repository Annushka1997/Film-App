"use strict";

// Առաջին հարցի պատասխանը

let image = document.querySelector("#headerImage");
image.src = "./img/bg2.jpg";

// Երկրորդ հարցի պատասխանը

document.querySelector(".main_promo").remove();

// Երրորդ հարցի պատասխանը

if (document.querySelector("#headerImage").src == "http://127.0.0.1:5500/film/img/bg2.jpg") {
    document.title = "Hitman's Wife's Bodyguard";
} else {
    document.title = "Gemini Man";
}

// Լրացուցիչ առաջադրանք
let myTitle = document.title;
let t = 0;

function myNewTitle () {
    document.title = myTitle.substring(0,t);
    if (t == myTitle.length) {
        t=0;
        setTimeout("myNewTitle()",3500);
    } else {
        t++; 
        setTimeout("myNewTitle()",300);
    }
}
myNewTitle();
