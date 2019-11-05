export class LoadingComponent{
    constructor(){

    }

    display(parent) {
        const container = document.createElement("register-form");
        container.appendChild(document.createTextNode("Loading"));
        parent.appendChild(container);
    }
}