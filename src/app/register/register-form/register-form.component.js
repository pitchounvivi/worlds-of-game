import { Component } from "../../../shared/components/component";

export class RegisterFormComponent extends Component {

    constructor(user) {
        super();
        this.user = user;
    }

    display(parent) {
        const containerElement = document.createElement("div");
        const formElement = document.createElement("form");
        const loginZone = document.createElement("div");
        const loginLabel = document.createElement("label");
        const loginInput = document.createElement("input");

        this.setAttributesTo(formElement, {
            method: "post",
            action: ""
        })

        this.setAttributesTo(loginInput, {
            type: "mail",
            placeholder: "email",
            value: this.user.login
        });




        loginZone.appendChild(loginLabel.appendChild(document.createTextNode("login : ")));
        loginZone.appendChild(loginInput);
        formElement.appendChild(loginZone);
        containerElement.appendChild(formElement);
        parent.appendChild(containerElement);
    }

}