import { createManager } from './index.js';

console.log("hi I'm from menu.js!");

const menuPage = function(){

    const createMenuPage = function(){
        console.log("hi I'm from menuPage.createMenuPage()!");
        const menuPage = createManager.createElement("div","menu page","");
        menuPage.appendChild(headerArea);
    }
    
    const appendHeaderElements = function(){
        const headerArea = createManager.createElement("div","header");
        const logo = createManager.createElement("h1","menu");
        headerArea.appendChild(logo);
        return headerArea;
    }

    return {createMenuPage}
}();

export {menuPage};