import { Component } from "../../../shared/components/component";

export class RegisterFormComponent extends Component {

    constructor(user) {
        super();
        this.user = user;
    }

    display(parent) {
        const containerElement = document.createElement("div");
        const formElement = document.createElement("form");
        const kindZone = document.createElement("div");
        const kindMrLabel = document.createElement("label");
        const kindMrInput = document.createElement("input");
        const kindMmeLabel = document.createElement("label");
        const kindMmeInput = document.createElement("input");
        const surnameZone = document.createElement("div");
        const surnameLabel = document.createElement("label");
        const surnameInput = document.createElement("input");
        const firstnameZone = document.createElement("div");
        const firstnameLabel = document.createElement("label");
        const firstnameInput = document.createElement("input");
        const lastnameZone = document.createElement("div");
        const lastnameLabel = document.createElement("label");
        const lastnameInput = document.createElement("input");
        const mailZone = document.createElement("div");
        const mailLabel = document.createElement("label");
        const mailInput = document.createElement("input");
        const phoneZone = document.createElement("div");
        const phoneLabel = document.createElement("label");
        const phoneInput = document.createElement("input");
        const addressZone = document.createElement("div");
        const addressLabel = document.createElement("label");
        const addressInput = document.createElement("input");
        const cityZone = document.createElement("div");
        const cityLabel = document.createElement("label");
        const cityInput = document.createElement("input");
        const zipCodeZone = document.createElement("div");
        const zipCodeLabel = document.createElement("label");
        const zipCodeInput = document.createElement("input");
        const passwordZone = document.createElement("div");
        const passwordLabel = document.createElement("label");
        const passwordInput = document.createElement("input");
        const buttonZone = document.createElement("div");
        const clearButton = document.createElement("button");
        const saveButton = document.createElement("button");

        this.setAttributesTo(formElement, {
            method: "post",
            action: ""
        });

        this.setAttributesTo(kindMrInput, {
            type: "radio",
            name: "kind",
            value: "Mr"
        });

        this.setAttributesTo(kindMmeInput, {
            type: "radio",
            name: "kind",
            value: "Mme"
        });

        this.setAttributesTo(surnameInput, {
            type: "text",
            placeholder: "surname",
            value: this.user.surname
        });

        this.setAttributesTo(firstnameInput, {
            type: "text",
            placeholder: "firstname",
            value: this.user.firstname
        });

        this.setAttributesTo(lastnameInput, {
            type: "text",
            placeholder: "lastname",
            value: this.user.lastname
        });

        this.setAttributesTo(mailInput, {
            type: "mail",
            placeholder: "email",
            value: this.user.mail
        });

        this.setAttributesTo(phoneInput, {
            type: "phone",
            placeholder: "phone",
            value: this.user.phone
        });

        this.setAttributesTo(addressInput, {
            type: "text",
            placeholder: "address",
            value: this.user.address
        });

        this.setAttributesTo(cityInput, {
            type: "text",
            placeholder: "city",
            value: this.user.city
        });

        this.setAttributesTo(zipCodeInput, {
            type: "text",
            placeholder: "Zip Code",
            value: this.user.zipCode
        });

        this.setAttributesTo(passwordInput, {
            type: "password",
            placeholder: "password",
            value: this.user.password
        });

        this.setAttributesTo(clearButton, {
            type: "submit",
            name: "clear"
        });

        this.setAttributesTo(saveButton, {
            type: "submit",
            name: "save"
        });

        kindZone.appendChild(kindMrLabel.appendChild(document.createTextNode("Mr : ")));
        kindZone.appendChild(kindMrInput);
        kindZone.appendChild(kindMmeLabel.appendChild(document.createTextNode(" Mme : ")));
        kindZone.appendChild(kindMmeInput);
        formElement.appendChild(kindZone);

        surnameZone.appendChild(surnameLabel.appendChild(document.createTextNode("Surname : ")));
        surnameZone.appendChild(surnameInput);
        formElement.appendChild(surnameZone);
        firstnameZone.appendChild(firstnameLabel.appendChild(document.createTextNode("Firstname : ")));
        firstnameZone.appendChild(firstnameInput);
        formElement.appendChild(firstnameZone);
        lastnameZone.appendChild(lastnameLabel.appendChild(document.createTextNode("Lastname : ")));
        lastnameZone.appendChild(lastnameInput);
        formElement.appendChild(lastnameZone);
        mailZone.appendChild(mailLabel.appendChild(document.createTextNode("Mail : ")));
        mailZone.appendChild(mailInput);
        formElement.appendChild(mailZone);
        phoneZone.appendChild(phoneLabel.appendChild(document.createTextNode("Phone : ")));
        phoneZone.appendChild(phoneInput);
        formElement.appendChild(phoneZone);
        addressZone.appendChild(addressLabel.appendChild(document.createTextNode("Address : ")));
        addressZone.appendChild(addressInput);
        formElement.appendChild(addressZone);
        cityZone.appendChild(cityLabel.appendChild(document.createTextNode("City : ")));
        cityZone.appendChild(cityInput);
        formElement.appendChild(cityZone);
        zipCodeZone.appendChild(zipCodeLabel.appendChild(document.createTextNode("Zip Code : ")));
        zipCodeZone.appendChild(zipCodeInput);
        formElement.appendChild(zipCodeZone);
        passwordZone.appendChild(passwordLabel.appendChild(document.createTextNode("Password : ")));
        passwordZone.appendChild(passwordInput);
        formElement.appendChild(passwordZone);
        clearButton.appendChild(document.createTextNode("Clear"));
        buttonZone.appendChild(clearButton);
        saveButton.appendChild(document.createTextNode("Save"));
        buttonZone.appendChild(saveButton);
        formElement.appendChild(buttonZone);

        containerElement.appendChild(formElement);
        parent.appendChild(containerElement);
    }

}