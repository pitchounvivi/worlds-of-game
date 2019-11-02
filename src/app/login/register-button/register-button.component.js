import { Component } from "../../../shared/components/component";

export class RegisterButtonComponent extends Component {

    constructor() {
        super();
        this.name = "?";
    }

    display(parent){
        const containerElement = document.createElement("div");
        const registerButton = document.createElement("button");
        let registerButtonText = document.createTextNode(this.name);

        const attributes = {
            type: "submit"
        };

        this.setAttributesTo(registerButton, attributes);
        
        registerButton.appendChild(registerButtonText);
        containerElement.appendChild(registerButton);

        parent.appendChild(containerElement);
    }
}