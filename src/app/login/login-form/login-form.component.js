export class LoginFormComponent{

    constructor(user, loginName) {
        this.value = user;   
        this.name = loginName;    
    }

    display(parent){
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
        let buttonText = document.createTextNode(this.name);

        
        setAttributesTo(formElement, {
            method: "post",
            action: ""
        })

        setAttributesTo(emailElement, {
            type: "mail",
            placeholder: "email",
            value: this.user.login
        })

        setAttributesTo(passwordElement, {
            type: "password",
            placeholder: "password",
            value: this.user.password  
        })

        setAttributesTo(buttonElement, {
            type: "submit",
            name: this.name
        })

        formElement.appendChild(emailElement)
        formElement.appendChild(passwordElement)
        buttonElement.appendChild(buttonText);
        formElement.appendChild(buttonElement);
        containerElement.appendChild(formElement);
        parent.appendChild(containerElement);

    }

}