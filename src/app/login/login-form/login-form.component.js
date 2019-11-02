import { Component } from "../../../shared/components/component";

export class LoginFormComponent extends Component{

    constructor(user, loginName) {
        super();
        this.value = user;   
        this.name = loginName;    
    }

    display(parent){
        const containerElement = document.createElement("div");
        const formElement = document.createElement("form");
        const emailElement = document.createElement("input");
        const passwordElement = document.createElement("input");
        const buttonElement = document.createElement("button");
        let buttonText = document.createTextNode(this.name);

        
        this.setAttributesTo(formElement, {
            method: "post",
            action: ""
        });

        this.setAttributesTo(emailElement, {
            type: "mail",
            placeholder: "email",
            value: this.user.login
        });

        this.setAttributesTo(passwordElement, {
            type: "password",
            placeholder: "password",
            value: this.user.password  
        });

        this.setAttributesTo(buttonElement, {
            type: "submit",
            name: this.name
        });

        formElement.appendChild(emailElement);
        formElement.appendChild(passwordElement);
        buttonElement.appendChild(buttonText);
        formElement.appendChild(buttonElement);
        containerElement.appendChild(formElement);
        parent.appendChild(containerElement);

    }

}