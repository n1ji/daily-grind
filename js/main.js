//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
		
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  

myDate = new Date();
myDay = myDate.getDay();

switch(myDay) {
    case 0:
        today = "Sunday";
    break;

    case 1:
        today = "Monday";
    break;

    case 2:
        today = "Tuesday";
    break;

    case 3:
        today = "Wednesday";
    break;

    case 4:
        today = "Thursday";
    break;

    case 5:
        today = "Friday";
    break;

    case 6:
        today = "Saturday";
    break;

    default: //If the day is somehow something other than Sunday-Saturday, return an error in place of today.
        today = "Error";
}

today = "Saturday"

if(today == "Sunday") {
    document.getElementById("coffee").src = "images/espresso.png";
    document.querySelector(".feature").style.color = "lightblue";
    document.querySelector("html").style.backgroundColor = "lightblue";
    document.getElementById("coffee").alt = "Espresso: Fuel Your Day, One Bold Sip at a Time."
    document.getElementById("daily-special").innerHTML = "Sunday's Espresso Escape:";
    document.getElementById("drink-of-day").innerHTML = "Espresso";
}

else if(today == "Monday") {
    document.getElementById("coffee").src = "images/cold-brew.jpg";
    document.querySelector("html").style.backgroundColor = "goldenrod";
    document.querySelector(".feature").style.color = "goldenrod";
    document.getElementById("coffee").alt = "Chill Your Grind: Smooth Energy, Served Cold."
    document.getElementById("daily-special").innerHTML = "Monday's Cold Brew Kickstart:";
    document.getElementById("drink-of-day").innerHTML = "Espresso";
}

else if(today == "Tuesday") {
    document.getElementById("coffee").src = "images/drip.jpg";
    document.querySelector(".feature").style.color = "#9718ff";
    document.querySelector("html").style.backgroundColor = "#9718ff";
    document.getElementById("coffee").alt = "Pure. Simple. Perfectly Brewed."
    document.getElementById("daily-special").innerHTML = "Tuesday's Classic Comfort:";
    document.getElementById("drink-of-day").innerHTML = "Espresso";
}

else if(today == "Wednesday") {
    document.getElementById("coffee").src = "images/frappaccino.jpg";
    document.querySelector("html").style.backgroundColor = "darkgreen";
    document.querySelector(".feature").style.color = "darkgreen";
    document.getElementById("coffee").alt = "Cool Bliss in Every Frosty Swirl."
    document.getElementById("daily-special").innerHTML = "Wednesday's Midweek Treat:";
    document.getElementById("drink-of-day").innerHTML = "Frappaccino";
}

else if(today == "Thursday") {
    document.getElementById("coffee").src = "images/caramel-latte.jpg";
    document.querySelector(".feature").style.color = "orange";
    document.querySelector("html").style.backgroundColor = "orange";
    document.getElementById("coffee").alt = "Golden Comfort, Sweetly Yours."
    document.getElementById("daily-special").innerHTML = "Thursday's Smooth & Sweet:";
    document.getElementById("drink-of-day").innerHTML = "Caramel Latte";
}

else if(today == "Friday") {
    document.getElementById("coffee").src = "images/mocha.jpg";
    document.querySelector("html").style.backgroundColor = "darkgrey";
    document.querySelector(".feature").style.color = "darkgrey";
    document.getElementById("coffee").alt = "Chocolate Meets Coffee, Love at First Sip."
    document.getElementById("daily-special").innerHTML = "Friday's Mocha Mood:";
    document.getElementById("drink-of-day").innerHTML = "Mocha";
}

else if(today == "Saturday") {
    document.getElementById("coffee").src = "images/bubble-tea.jpg";
    document.querySelector("html").style.backgroundColor = "lightpink";
    document.querySelectorAll(".feature").style.color = "palevioletred";
    document.getElementById("coffee").alt = "Fun, Flavor, and a Pop of Joy!"
    document.getElementById("daily-special").innerHTML = "Saturday's Weekend Bubbles:";
    document.getElementById("drink-of-day").innerHTML = "Bubble Tea";
}

//Dynamic copyright year changer
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;