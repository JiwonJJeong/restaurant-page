console.log("hi I'm from about.js!");

import { createManager } from './index.js';

const aboutPage = function(){

    const createAboutPage = function(){
        console.log("hi I'm from aboutPage.createAboutPage()!");
        const aboutPage = createManager.createElement("div","about page","");
        aboutPage.appendChild(appendBioElements());
        aboutPage.appendChild(appendLocationElements());
        aboutPage.appendChild(appendContactElements());
        return aboutPage;
    }

    const appendBioElements = function(){
        const bioArea = createManager.createElement("div","bio area");
        const bioTitle = createManager.createElement("h1","bio title","Meet the Terry Family");
        const bioText = createManager.createElement("p","bio text","Our happy tavern started in year 1234 when Terry Toots decided he wanted to share his passion for food and music with his friends. Terry's goals were to make the best spot to hang out and relax. The tavern started out as small gatherings with friends and family, and we have grown to our awesome tavern today. Terry's Terrific Tavern lives on and spreads its original purpose of cheer through descendants of the Toots family.");
        bioArea.appendChild(bioTitle);
        bioArea.appendChild(bioText);
        return bioArea;
    }

    const appendLocationElements = function(){
        const locationArea = createManager.createElement("div","location area");
        const locationTitle = createManager.createElement("h1","location title","Address");
        const location = createManager.createElement("p","location text","123 Old Town Ave, Islebury, Faerûn");
        locationArea.appendChild(locationTitle);
        locationArea.appendChild(location);
        return locationArea;
    }

    const appendContactElements = function(){
        const contactArea = createManager.createElement("div","contact area");
        const contactForm = createManager.createElement("form", "contact-form");
        const firstNameField = createInputAndLabel("first-name","text","First Name");
        const lastNameField = createInputAndLabel("last-name","text","Last Name");
        const mailAddressField = createInputAndLabel("mail-address","text","Mail Address","Where should we send our messenger pigeon?");
        const commentField = createInputAndLabel("comment","text","Comments","Let us know what you think!");
        const submitButton = createManager.createElement("input","submit button","Submit");
        contactForm.appendChild(firstNameField.label);
        contactForm.appendChild(firstNameField.input);
        contactForm.appendChild(lastNameField.label);
        contactForm.appendChild(lastNameField.input);
        contactForm.appendChild(mailAddressField.label);
        contactForm.appendChild(mailAddressField.input);
        contactForm.appendChild(commentField.label);
        contactForm.appendChild(commentField.input);
        contactForm.appendChild(submitButton);
        contactArea.appendChild(contactForm);
        return contactArea;
    }

    const createInputAndLabel = function(identifier,type, labelText, placeholder=null){
        const label = createManager.createElement("label",identifier, labelText);
        label.for = identifier;
        const input = createManager.createElement("input",identifier);
        input.placeholder = placeholder;
        input.id = identifier;
        input.type = type;
        return {label, input};
    }

    return {createAboutPage}
}();

export {aboutPage};