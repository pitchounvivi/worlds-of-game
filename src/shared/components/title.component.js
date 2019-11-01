export class TitleComponent {

    constructor (){
        this.text = "?";
    }

    display(parent){
        const containerElement = document.createElement("div");
        const titleElement = document.createElement("h1");
        let titleText = document.createTextNode(this.text);
        
        titleElement.appendChild(titleText);

        containerElement.appendChild(titleElement);
        parent.appendChild(containerElement);
    }

}