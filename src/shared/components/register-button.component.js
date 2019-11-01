export class RegisterButtonComponent {

    constructor() {
        this.name = "?";
    }

    setAttributesTo (element, attributes){
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    display(parent){
        const containerElement = document.createElement("div");
        const registerButton = document.createElement("button");
        let registerButtonText = document.createTextNode(this.name);

        const attributes = {
            type: "submit"
        }

        this.setAttributesTo(registerButton, attributes);
        
        registerButton.appendChild(registerButtonText);
        containerElement.appendChild(registerButton);

        parent.appendChild(containerElement);
    }
}