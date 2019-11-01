export class RegisterButtonComponent {

    constructor(parent,name){
        const containerElement = document.createElement("div");
        const registerButton = document.createElement("button");
        let registerButtonText = document.createTextNode(name);

        const attributes = {
            type: "submit",
            value: registerButtonText
        }

        const setAttributesTo = (registerButton, attributes) =>{
            for (const key in attributes){
                registerButton.setAttribute(key, attributes[key]);
            }
        }

        registerButton.appendChild(registerButtonText);
        containerElement.appendChild(registerButton);

        parent.appendChild(containerElement);
    }
}