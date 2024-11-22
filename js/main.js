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

const queryString = location.search; //Finds the site url location
const urlParams = new URLSearchParams(queryString); //Creates a URL paramater with the location from above

//If the URL has day then add the current day to change the switch case.
if(urlParams.has('day')) {
    myDay = urlParams.get('day');
    myDay = parseInt(myDay);
}

else { //If the url has nothing relating to the day, then set the page to the current day.
    myDay = myDate.getDay();
}

switch(myDay) {
    case 0:
        today = "Sunday";

        drink = {
            name:"Espresso",
            pic:"images/espresso.png",
            alt:"fuels your day, one bold sip at a time.",
            color:"darkkhaki",
            desc:'Espresso is the heart and soul of coffee, offering a bold, concentrated experience in every sip. Made by forcing hot water through finely-ground coffee under high pressure, this method extracts the rich, full-bodied flavor that coffee lovers adore. Its velvety crema, the golden layer on top, hints at the depth of flavor waiting beneath. Perfect on its own for a quick burst of energy or as the base for many beloved coffee drinks like lattes, cappuccinos, and mochas, espresso is versatile and timeless. With its robust aroma and intense taste, it’s the ultimate expression of coffee craftsmanship.',
            special:"Sunday's Espresso Escape:",
        }
    break;

    case 1:
        today = "Monday";

        drink = {
            name:"Cold Brew",
            pic:"images/cold-brew.jpg",
            alt:"Chill Your Grind: Smooth Energy, Served Cold.",
            color:"salmon",
            desc:'Cold brew coffee is a smooth, refreshing twist on your traditional coffee experience. Made by steeping coarsely ground coffee beans in cold water for 12 to 24 hours, this method extracts the natural sweetness and bold flavors without the bitterness of hot-brewed coffee. The result is a mellow, velvety brew with subtle chocolate and nutty undertones, perfect for savoring on a warm day.',
            special:"Monday's Cold Brew Kickstart:",
        }
    break;

    case 2:
        today = "Tuesday";

        drink = {
            name:"Drip Coffee",
            pic:"images/drip.jpg",
            alt:"pure, simple and perfectly brewed.",
            color:"plum",
            desc:'Drip coffee is the essence of a classic brew, offering a pure, unadulterated taste that celebrates the coffee bean’s natural flavor. Created by allowing hot water to pass through ground coffee in a filter, drip coffee is an everyday staple that blends tradition with convenience. It’s a warm, comforting drink that sets the tone for productivity and focus.',
            special:"Tuesday's Classic Comfort:",
        }
    break;

    case 3:
        today = "Wednesday";

        drink = {
            name:"Frappaccino",
            pic:"images/frappaccino.jpg",
            alt:"a cool bliss in every frosty swirl.",
            color:"darkseagreen",
            desc:`The Frappuccino is a sweet, creamy blend of indulgence and refreshment. Combining coffee or crème base with milk, ice, and flavorful syrups, this blended beverage is then topped with a luscious swirl of whipped cream. Its thick, icy texture makes it a perfect treat for hot days or whenever you’re in the mood for something playful and satisfying.`,
            special:"Wednesday's Midweek Treat:",
        }
    break;

    case 4:
        today = "Thursday";

        drink = {
            name:"Caramel Latte",
            pic:"images/caramel-latte.jpg",
            alt:"golden comfort, sweetly yours.",
            color:"sandybrown",
            desc:'The caramel latte is a harmonious blend of smooth espresso, steamed milk, and rich caramel syrup. This delightful drink offers the perfect balance of creamy sweetness and robust coffee flavor, making it a favorite among those who enjoy a touch of indulgence with their caffeine.',
            special:"Thursday's Smooth & Sweet:",
        }
    break;

    case 5:
        today = "Friday";

        drink = {
            name:"Mocha",
            pic:"images/mocha.jpg",
            alt:"where chocolate meets coffee, love at first sip.",
            color:"lightseagreen",
            desc:'A mocha is the ultimate union of coffee and chocolate, creating a decadent drink that’s both energizing and indulgent. This beverage starts with a rich espresso base, combined with steamed milk and velvety chocolate syrup. The result is a smooth, creamy concoction with just the right balance of sweetness and coffee kick.',
            special:"Friday's Mocha Mood:",
        }
    break;

    case 6:
        today = "Saturday";

        drink = {
            name:"Bubble Tea",
            pic:"images/bubble-tea.jpg",
            alt:"fun, flavor, and a pop of joy!",
            color:"palevioletred",
            desc:'Bubble tea, also known as boba tea, is a fun and flavorful drink that originated in Taiwan and has since become a global sensation. This tea-based beverage is infused with milk or fruit flavors and is served with chewy tapioca pearls or popping boba, creating a delightful textural contrast with every sip.',
            special:"Saturday's Weekend Bubbles:",
        }
    break;

    default: //If the day is somehow something other than Sunday-Saturday, assign the day as an error in place of the day.
        today = "Error";
}

//Change colors of text and background color of the site using functions.
document.getElementById("coffee-cup").innerHTML = drinkTemplate(drink);
document.getElementById("coffee-desk").innerHTML = drinkDesk(drink);
document.querySelector("html").style.backgroundColor = `${drink.color}`

//Change all feature classes to the drink color
const NodeList = document.querySelectorAll(".feature");
for (let i = 0; i < NodeList.length; i++) {
  NodeList[i].style.color = `${drink.color}`;
} 

//Function to change the first paragraph, swapping out certain items with json pairs.
function drinkTemplate(drink) {
    let myReturn = `<p>
    	<img src="${drink.pic}" alt="${drink.alt}" id="coffee"/>
		<strong class="feature" id="daily-special">${drink.special}</strong> Today's daily coffee special is <strong class="feature">${drink.name}</strong>, which is ${drink.alt}</p>`;
    return myReturn;
}

//Function to change the second paragraph
function drinkDesk(drink) {
    let myDesk = `<p><span class="feature" id="coffee-cup"><strong>${drink.name}: </strong></span>${drink.desc}</p>`;
    return myDesk;
}

//If the day is somehow something other than Saturday through Sunday, then change the background to an error background.
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
