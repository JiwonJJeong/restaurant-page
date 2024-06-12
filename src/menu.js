import { createManager } from './index.js';

import BreadImage from "./images/bread.jpg";
import SteakImage from "./images/steak.jpg";
import SaladImage from "./images/salad.jpg";
import DarkBeerImage from "./images/dark-beer.jpg";
import PaleAleImage from "./images/pale-ale.jpg";
import CocktailImage from "./images/cocktail.jpg";

console.log("hi I'm from menu.js!");

const menuPage = function(){

    const createMenuPage = function(){
        console.log("hi I'm from menuPage.createMenuPage()!");
        const menuPage = createManager.createElement("div","menu page","");
        menuPage.appendChild(appendMealHeaderElements());
        menuPage.appendChild(appendMealElements());
        menuPage.appendChild(appendDrinkHeaderElements());
        menuPage.appendChild(appendDrinkElements());
        return menuPage;
    }
    
    const appendMealHeaderElements = function(){
        const headerArea = createManager.createElement("div","header area");
        const logo = createManager.createElement("h1","meal-title","Meals");
        headerArea.appendChild(logo);
        return headerArea;
    }

    const appendDrinkHeaderElements = function(){
        const headerArea = createManager.createElement("div","header area");
        const logo = createManager.createElement("h1","drink-title","Drinks");
        headerArea.appendChild(logo);
        return headerArea;
    }

    const createMenuItem = function(nameOfItem, priceString, imageSrc, imageAlt){
        const menuItemArea = createManager.createElement("div","item area");
        const itemName = createManager.createElement("h3","item name",nameOfItem);
        const itemPrice = createManager.createElement("p","item price",priceString);
        const itemImage = createManager.createImage(imageSrc, imageAlt);
        menuItemArea.appendChild(itemName);
        menuItemArea.appendChild(itemPrice);
        menuItemArea.appendChild(itemImage);
        return menuItemArea;
    }

    const appendMealElements = function(){
        const mealArea = createManager.createElement("div","meal area");
        const itemTrollbread = createMenuItem("Trollbread", "6 silver", BreadImage, "artisan bread roll");
        const itemOwlbearSteak = createMenuItem("Owlbear Steak", "12 silver", SteakImage, "well-done steak on grill");
        const itemErdtreeSalad = createMenuItem("Erdtree Salad", "9 silver", SaladImage, "beet and lettuce salad platter");
        mealArea.appendChild(itemTrollbread);
        mealArea.appendChild(itemOwlbearSteak);
        mealArea.appendChild(itemErdtreeSalad);
        return mealArea;
    }

    const appendDrinkElements = function(){
        const drinkArea = createManager.createElement("div","drink area");
        const itemWyrmwizzAle = createMenuItem("Wyrmwizz Ale", "4 silver", PaleAleImage, "light-colored ale in glass");
        const itemGoodberryCocktail = createMenuItem("Goodberry Cocktail", "6 silver", CocktailImage, "orange cocktail");
        const itemHauntedCheer = createMenuItem("Haunted Cheer", "6 silver", DarkBeerImage, "dark beer poured");
        drinkArea.appendChild(itemWyrmwizzAle);
        drinkArea.appendChild(itemGoodberryCocktail);
        drinkArea.appendChild(itemHauntedCheer);
        return drinkArea;
    }

    return {createMenuPage}
}();

export {menuPage};