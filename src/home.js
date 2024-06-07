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

const homePage = function(){

    const appendHeaderElements = function(){
        const headerArea = createElement("div","logo","");
        const logoText = createElement("h1","","Terry's Terrific Tavern")
        headerArea.appendChild(logoText);
        return headerArea;
    }

    const appendIntroElements = function(){
        const introParagraph = createElement("p", "intro","Welcome adventurers! Every dragon-slayer, orc-destroyer, dungeon-conquerer needs to relax at the best tavern in Fantasy Town! Enjoy top-quality food, drink, and song today!");
        return introParagraph;
    }

    const appendDescriptionElements = function(){
        const descriptionArea = createElement("div","description area","");
        const headerOne = createElement("h2","","50% off happy hour");
        const descriptionOne = createElement("p","","Enjoy twice as much of our famous Wyrmwizz Ale between 5-8!");
        const headerTwo = createElement("h2","","LFG nights-- everynight!");
        const descriptionTwo = createElement("p","","Terry's Terrific Tavern is THE place to meet new adventurers!");
        const headerThree = createElement("h2","","It's not just a bar");
        const descriptionThree = createElement("p","","Each meal is freshly prepared, locally sourced, and has the taste of fine dining!");
        descriptionArea.appendChild(headerOne);
        descriptionArea.appendChild(descriptionOne);
        descriptionArea.appendChild(headerTwo);
        descriptionArea.appendChild(descriptionTwo);
        descriptionArea.appendChild(headerThree);
        descriptionArea.appendChild(descriptionThree);
        return descriptionArea;
    }

    const createElement = function(type, classString="", innerText=""){
        const createdElement = document.createElement(type);
        if (classString !== ""){
            const classArray = classString.split(" ");
            for (let singleClass of classArray){
                createdElement.classList.add(singleClass);
            }
        }
        createdElement.textContent = innerText;
        return createdElement;
    }

    const createHomePage = function(){
        const homePage = createElement("div","home page","");
        homePage.appendChild(appendHeaderElements());
        homePage.appendChild(appendIntroElements());
        homePage.appendChild(appendDescriptionElements());
        return homePage;
    }

    return {createHomePage};
}();

export {homePage};