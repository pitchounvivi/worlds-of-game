export class ZoneDisplayComponent{

    constructor (text){
        this.text = text;
    }

    display(parent){
        const element = document.createElement("div");
        const zoneDisplay = document.createElement("p");
        let titleText = document.createTextNode(this.text);
        
        zoneDisplay.appendChild(titleText);

        element.appendChild(zoneDisplay);
        parent.appendChild(element);
    }
}