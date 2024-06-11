import { createManager } from './index.js';

console.log("hi I'm from menu.js!");

const menuPage = function(){

    const createMenuPage = function(){
        console.log("hi I'm from menuPage.createMenuPage()!");
        const menuPage = createManager.createElement("div","menu page","");
        menuPage.appendChild(appendHeaderElements());
        menuPage.appendChild(appendMealElements());
        menuPage.appendChild(appendDrinkElements());
        return menuPage;
    }
    
    const appendHeaderElements = function(){
        const headerArea = createManager.createElement("div","header area");
        const logo = createManager.createElement("h1","menu-title","Menu");
        headerArea.appendChild(logo);
        return headerArea;
    }

    const createMenuItem = function(nameOfItem, priceString, imageSrc, imageAlt){
        const menuItemArea = createManager.createElement("div","item area");
        const itemName = createManager.createElement("h2","item name",nameOfItem);
        const itemPrice = createManager.createElement("p","item price",priceString);
        const itemImage = createManager.createImage(imageSrc, imageAlt);
        menuItemArea.appendChild(itemName);
        menuItemArea.appendChild(itemImage);
        return menuItemArea;
    }

    const appendMealElements = function(){
        const mealArea = createManager.createElement("div","meal area");
        const mealHeader = createManager.createElement("h2","meal header","Meals")
        const itemTrollbread = createMenuItem("Trollbread", "6 silver");
        const itemOwlbearSteak = createMenuItem("Owlbear Steak", "12 silver");
        const itemErdtreeSalad = createMenuItem("Erdtree Salad", "9 silver");
        return mealArea;
    }

    const appendDrinkElements = function(){
        const drinkArea = createManager.createElement("div","drink area");
        const itemWyrmwizzAle = createMenuItem("Wyrmwizz Ale", "4 silver");
        const itemGoodberryCocktail = createMenuItem("Goodberry Cocktail", "6 silver");
        const itemHauntedCheer = createMenuItem("Haunted Cheer", "6 silver");
        return drinkArea;
    }

    return {createMenuPage}
}();

export {menuPage};