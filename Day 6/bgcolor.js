/* Write a program that will iterate over an array of colors and change the background of the page after 5 seconds. */

var bg = document.querySelector('.bg');
var colors = ["#CCCDFF", "#BAC7E8", "#D9EEFF", "#BADFE8","#FFA500","#FFFF00","#00FF00","#800080"]; // colors array
var index = 0; // keeps count of the colors

    function change() {
        if(index>=colors.length) {
            clearInterval(timer); // when we run out of colors , stop the timer
        }
        bg.style.backgroundColor = colors[index++]; // set the color and increment the index value
    }
    
var timer = setInterval(change,500);