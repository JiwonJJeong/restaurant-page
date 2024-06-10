console.log("hi I'm from menu.js!");

const menuPage = function(){

    const createMenuPage = function(){
        console.log("hi I'm from menuPage.createMenuPage()!");
    }

    return {createMenuPage}
}();

export {menuPage}