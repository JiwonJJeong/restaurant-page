{/* <div class="logo">
<h1>Terry's Terrific Tavern</h1>
</div>
<p class="intro">Welcome adventurers! Every dragon-slayer, orc-destroyer, dungeon-conquerer
 needs to relax at the best tavern in Fantasy Town! Enjoy top-quality food, drink, and song today!</p>
<div class="">
<h2>50% off happy hour</h2>
<p>Enjoy twice as much of our famous Wyrmwizz Ale between 5-8!</p>
<h2>LFG nights-- everynight!</h2>
<p>Terry's Terrific Tavern is THE place to meet new adventurers!</p>
<h2>It's not just a bar</h2>
<p>Each meal is freshly prepared, locally sourced, and has the taste of fine dining!</p>
</div>
<img class="home image">
<div class="attribution">
<p>Woman in tavern photo by <a href="https://stockcake.com/i/medieval-tavern-joy_752875_804181">Stockcake</a></p>
</div> */}
import TavernImage from './images/happy-tavern-joy.jpg';
import { createManager } from './index.js';

const homePage = function(){

    const appendHeaderElements = function(){
        const headerArea = createManager.createElement("div","header area","");
        const logoText = createManager.createElement("h1","","Terry's Terrific Tavern")
        headerArea.appendChild(logoText);
        return headerArea;
    }

    const appendIntroElements = function(){
        const introArea = createManager.createElement("div","intro area","");
        const introParagraph = createManager.createElement("p", "intro text","Welcome adventurers! Every dragon-slayer, orc-destroyer, dungeon-conquerer needs to relax at the best tavern in Fantasy Town! Enjoy top-quality food, drink, and song today!");
        introArea.appendChild(introParagraph);
        return introArea;
    }

    const appendDescriptionElements = function(){
        const descriptionArea = createManager.createElement("div","description area","");
        const headerOne = createManager.createElement("h2","","50% off happy hour");
        const descriptionOne = createManager.createElement("p","","Enjoy twice as much of our famous Wyrmwizz Ale between 5-8!");
        const headerTwo = createManager.createElement("h2","","LFG nights-- everynight!");
        const descriptionTwo = createManager.createElement("p","","Terry's Terrific Tavern is THE place to meet new adventurers!");
        const headerThree = createManager.createElement("h2","","It's not just a bar");
        const descriptionThree = createManager.createElement("p","","Each meal is freshly prepared, locally sourced, and has the taste of fine dining!");
        const happyGirlImage = createManager.createImage(TavernImage, "happy girl in tavern");
        descriptionArea.appendChild(headerOne);
        descriptionArea.appendChild(descriptionOne);
        descriptionArea.appendChild(headerTwo);
        descriptionArea.appendChild(descriptionTwo);
        descriptionArea.appendChild(headerThree);
        descriptionArea.appendChild(descriptionThree);
        descriptionArea.appendChild(happyGirlImage);
        return descriptionArea;
    }

    const createHomePage = function(){
        const homePage = createManager.createElement("div","home page","");
        homePage.appendChild(appendHeaderElements());
        homePage.appendChild(appendIntroElements());
        homePage.appendChild(appendDescriptionElements());
        return homePage;
    }

    return {createHomePage};
}();

export {homePage};