export class LoadingComponent {
    constructor() {
    }

    display(parent) { 
        this.loadingElement = document.createElement("div");
        this.loadingElement.appendChild(document.createTextNode("Loading"));
        parent.appendChild(this.loadingElement);
    }

    hide() {
        this.loadingElement.parentNode.removeChild(this.loadingElement);
    }
}