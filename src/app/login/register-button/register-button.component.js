import { Component } from "../../../shared/components/component";

export class RegisterButtonComponent extends Component {

    constructor(name) {
        super();
        this.name = name;
    }

    display(parent){
        const containerElement = document.createElement("div");
        const registerButton = document.createElement("button");
        let registerButtonText = document.createTextNode(this.name);

        const attributes = {
            type: "submit",
            value: "register"
        };

        this.setAttributesTo(registerButton, attributes);
        
        registerButton.appendChild(registerButtonText);
        containerElement.appendChild(registerButton);

        parent.appendChild(containerElement);
    }
}