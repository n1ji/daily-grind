/*
    daily-grind.js

        Name – Bubble tea for example 
        Pic – an image of a bubble tea 
        Day – for example, wednesday 
        Alt – the data in the alt tag 
        Color – a color to match the coffee 
        Desc – a paragraph or two that describes the daily item 
*/

let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let drink = "";

switch(myDay) {
    case 0:
        today = "Sunday";

        drink = {
            name:"Espresso",
            pic:"images/espresso.png",
            alt:"Espresso: Fuel Your Day, One Bold Sip at a Time.",
            color:"lightblue",
            desc:'',
            special:"Sunday's Espresso Escape:",
        }
    break;

    case 1:
        today = "Monday";

        drink = {
            name:"Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"Chill Your Grind: Smooth Energy, Served Cold.",
            color:"goldenrod",
            desc:'',
            special:"Monday's Cold Brew Kickstart:",
        }
    break;

    case 2:
        today = "Tuesday";

        drink = {
            name:"Drip Coffee",
            pic:"images/drip.jpg",
            alt:"Drip too hard.",
            color:"#9718ff",
            desc:'',
            special:"Tuesday's Classic Comfort:",
        }
    break;

    case 3:
        today = "Wednesday";

        drink = {
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"Cool Bliss in Every Frosty Swirl.",
            color:"darkgreen",
            desc:`The Frappuccino is a sweet, creamy blend of indulgence and refreshment. Combining coffee or crème base with milk, ice, and flavorful syrups, this blended beverage is then topped with a luscious swirl of whipped cream. Its thick, icy texture makes it a perfect treat for hot days or whenever you’re in the mood for something playful and satisfying.`,
            special:"Wednesday's Midweek Treat:",
        }
    break;

    case 4:
        today = "Thursday";

        drink = {
            name:"Caramel Latte",
            pic:"images/caramel-latte.jpg",
            alt:"Golden Comfort, Sweetly Yours.",
            color:"orange",
            desc:'',
            special:"Thursday's Smooth & Sweet:",
        }
    break;

    case 5:
        today = "Friday";

        drink = {
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"where Chocolate Meets Coffee, Love at First Sip.",
            color:"darkgrey",
            desc:'',
            special:"Friday's Mocha Mood:",
        }
    break;

    case 6:
        today = "Saturday";

        drink = {
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"Fun, Flavor, and a Pop of Joy!",
            color:"palevioletred",
            desc:'',
            special:"Saturday's Weekend Bubbles:",
        }
    break;

    default: //If the day is somehow something other than Sunday-Saturday, assign the day as an error in place of the day.
        today = "Error";
}

document.getElementById("coffee-cup").innerHTML = drinkTemplate(drink);

function drinkTemplate(drink) {
    let myReturn = `<p>
    	<img src="${drink.pic}" alt="${drink.alt}" id="coffee"/>
		<strong class="feature" id="daily-special">${drink.special}</strong> Today's daily coffee special is <strong class="feature" id="drink-of-day">${drink.name}</strong>, which is ${drink.alt}</p>`;
    return myReturn;
}

if(today == "Error") {
    document.querySelector("html").style.backgroundImage = "url('images/ethan.gif')";
    document.querySelector("html").style.backgroundSize = "20%";
}

//Dynamic copyright year changer
let d = new Date(); let thisYear = d.getFullYear();
document.getElementById("this-year").innerHTML = thisYear;

//https://tinyurl.com/dynamic-html-checker
document.getElementById("html-checker").setAttribute("href","https://validator.w3.org/nu/?doc=" + location.href);
		
document.getElementById("css-checker").setAttribute("href","https://jigsaw.w3.org/css-validator/validator?uri=" + location.href);  
