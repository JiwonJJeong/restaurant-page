console.log("I am from index.js!");

import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {aboutPage} from './about.js';

const pageManager = function(){

    const init = function(){
        cacheDom();
        bindEvents();
    }

    let contentSection;
    const cacheDom = function(){
        contentSection = document.querySelector("#content");
    }
    
    const renderHomePage = function(){
        contentSection.appendChild(homePage.createHomePage());
    }

    const bindEvents = function(){
        //bind events
    }

    return {init,renderHomePage};
}();

pageManager.init();
pageManager.renderHomePage();