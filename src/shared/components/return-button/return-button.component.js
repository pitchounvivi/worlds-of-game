import { Component } from "../component";

export class ReturnButtonComponent extends Component {
    constructor(name) {
        super();
        this.name = name;
    }

    display(parent) {
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
}