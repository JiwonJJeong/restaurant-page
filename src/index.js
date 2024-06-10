console.log("I am from index.js!");

import {homePage} from './home.js';
import {menuPage} from './menu.js';
import {aboutPage} from './about.js';

const pageManager = function(){

    let currentPage = null;
    const init = function(){
        cacheDom();
        bindEvents();
        renderHomePage();
    }

    let contentSection;
    let homeButton;
    let menuButton;
    let aboutButton;
    const cacheDom = function(){
        contentSection = document.querySelector("#content");
        homeButton = document.querySelector(".home.button");
        menuButton = document.querySelector(".menu.button");
        aboutButton = document.querySelector(".about.button");
    }

    const bindEvents = function(){
        homeButton.addEventListener("click", renderHomePage);
        menuButton.addEventListener("click", renderMenuPage);
        aboutButton.addEventListener("click", renderAboutPage);
    }

    const renderHomePage = function(){
        if (currentPage !== "home"){
            deletePageContent();
            contentSection.appendChild(homePage.createHomePage());
        }
        currentPage = "home";
    }

    const renderMenuPage = function(){
        if (currentPage !== "menu"){
            deletePageContent();
            contentSection.appendChild(menuPage.createMenuPage());
        }
        currentPage ="menu";
    }

    const renderAboutPage = function(){
        if (currentPage != "about"){
            deletePageContent();
            contentSection.appendChild(aboutPage.createAboutPage());
        }
        currentPage = "about";
    }

    const deletePageContent = function(){
        while (contentSection.firstChild){
            contentSection.removeChild(contentSection.firstChild);
        }
    }



    return {init,renderHomePage};
}();

pageManager.init();
pageManager.renderHomePage();