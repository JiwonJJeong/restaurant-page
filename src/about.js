console.log("hi I'm from about.js!");

const aboutPage = function(){

    const createAboutPage = function(){
        console.log("hi I'm from aboutPage.createAboutPage()!");
    }

    return {createAboutPage}
}();

export {aboutPage}