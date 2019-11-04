import { InputComponent } from "../../../shared/components/input/input.component";
import { LabelComponent } from "../../../shared/components/label/label.component";
import $ from 'jquery';

export class RegisterFormComponent {

    constructor(user) {
        this.user = user;
        this.kindMrLabel = new LabelComponent("Mr : ", {
            for: "Mr"
        });
        this.kindMmeLabel = new LabelComponent(" Mme : ", {
            for: "Mme"
        });
        this.kindMrInput = new InputComponent({
            type: "radio",
            name: "kind",
            value: "Mr"            
        });
        this.kindMmeInput = new InputComponent({
            type: "radio",
            name: "kind",
            value: "Mme"
        });
        this.surnameInput = new InputComponent({
            id: "surname",
            type: "text",
            placeholder: "surname",
            value: user.surname,
            label: "Surname : "
        });
        this.firstnameInput = new InputComponent({
            id: "firstname",
            type: "text",
            placeholder: "firstname",
            value: user.firstname,
            label: "Firstname : "
        });
        this.lastnameInput = new InputComponent({
            id: "lastname",
            type: "text",
            placeholder: "lastname",
            value: user.lastname,
            label: "Lastname : "
        });
        this.mailInput = new InputComponent({
            id: "mail",
            type: "mail",
            placeholder: "Email",
            value: user.mail,
            label: "Mail : "
        });
        this.phoneInput = new InputComponent({
            id: "phone",
            type: "phone",
            placeholder: "phone",
            value: user.phone,
            label: "Phone : "
        });
        this.addressInput = new InputComponent({
            id: "address",
            type: "text",
            placeholder: "your address",
            value: user.address,
            label: "Address : "
        });
        this.cityInput = new InputComponent({
            id: "city",
            type: "text",
            placeholder: "your city",
            value: user.city,
            label: "City : "
        });
        this.zipCodeInput = new InputComponent({
            id: "zipCode",
            type: "text",
            placeholder: "your zipCode",
            value: user.zipCode,
            label: "Zip Code : "
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Password",
            value: user.password,
            label: "Password : "
        });
    }

    display(parent) {
        const container = document.createElement("register-form");
        const form = document.createElement("form");
        const kindZone = document.createElement("div");
        const surnameZone = document.createElement("div");
        const firstnameZone = document.createElement("div");
        const lastnameZone = document.createElement("div");
        const mailZone = document.createElement("div");
        const phoneZone = document.createElement("div");
        const addressZone = document.createElement("div");
        const cityZone = document.createElement("div");
        const zipCodeZone = document.createElement("div");
        const passwordZone = document.createElement("div");
        const clearButton = document.createElement("button");
        const saveButton = document.createElement("button");

        form.setAttribute("method", "post");
        form.setAttribute("action", "");

        container.appendChild(form);
        form.appendChild(kindZone);
        this.kindMrLabel.display(kindZone);
        this.kindMrInput.display(kindZone);
        this.kindMmeLabel.display(kindZone);
        this.kindMmeInput.display(kindZone);
        form.appendChild(surnameZone);
        this.surnameInput.display(surnameZone);
        form.appendChild(firstnameZone);
        this.firstnameInput.display(firstnameZone);
        form.appendChild(lastnameZone);
        this.lastnameInput.display(lastnameZone);
        form.appendChild(mailZone);
        this.mailInput.display(mailZone);
        form.appendChild(phoneZone);
        this.phoneInput.display(phoneZone);
        form.appendChild(addressZone);
        this.addressInput.display(addressZone);
        form.appendChild(cityZone);
        this.cityInput.display(cityZone);
        form.appendChild(zipCodeZone);
        this.zipCodeInput.display(zipCodeZone);
        form.appendChild(passwordZone);
        this.passwordInput.display(passwordZone);

        clearButton.setAttribute("type", "submit");
        saveButton.setAttribute("type", "submit");

        clearButton.appendChild(document.createTextNode("Reset"));
        saveButton.appendChild(document.createTextNode("Create Account"));
        form.appendChild(clearButton);
        form.appendChild(saveButton);

        saveButton.addEventListener(
            "click",
            (event) => {         
                this.clickButton(event); 
            }
        );

        parent.appendChild(container);
    }

    clickButton(event) {
        event.preventDefault();
        console.log("Hello"); 
        
        this.user.surname = this.surnameInput.input.value;
        this.user.firstname = this.firstnameInput.input.value;
        this.user.lastname = this.lastnameInput.input.value;
        this.user.mail = this.mailInput.input.value;
        this.user.phone = this.phoneInput.input.value;
        this.user.address = this.addressInput.input.value;
        this.user.city = this.cityInput.input.value;
        this.user.zipCode = this.zipCodeInput.input.value;
        this.user.password = this.passwordInput.input.value;
    }

}