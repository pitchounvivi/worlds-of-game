
export class LoginFormComponent{

    constructor(parent,user){
        const setAttributesTo = (elem, attributes) => {
            for (const key in attributes) {
                elem.setAttribute(key, attributes[key]);
            }
        }

        const containerElement = document.createElement("div");
        const formElement = document.createElement("form");
        const emailElement = document.createElement("input");
        const passwordElement = document.createElement("input");
        const buttonElement = document.createElement("button");
        let buttonText = document.createTextNode("Go");

        setAttributesTo(formElement, {
            method: "post",
            action: ""
        })

        setAttributesTo(emailElement, {
            type: "mail",
            placeholder: "email",
            value: user.login
        })

        setAttributesTo(passwordElement, {
            type: "password",
            placeholder: "password",
            value: user.password  
        })

        formElement.appendChild(emailElement)
        formElement.appendChild(passwordElement)
        buttonElement.appendChild(buttonText);
        formElement.appendChild(buttonElement);
        containerElement.appendChild(formElement);
        parent.appendChild(containerElement);

    }

}