import { InputComponent } from "../../../shared/components/input/input.component";
import { LabelComponent } from "../../../shared/components/label/label.component";

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
            value: user.surname
        });
        this.firstnameInput = new InputComponent({
            id: "firstname",
            type: "text",
            placeholder: "firstname",
            value: user.firstname
        });
        this.lastnameInput = new InputComponent({
            id: "lastname",
            type: "text",
            placeholder: "lastname",
            value: user.lastname
        });
        this.mailInput = new InputComponent({
            id: "mail",
            type: "mail",
            placeholder: "Email",
            value: user.mail
        });
        this.phoneInput = new InputComponent({
            id: "phone",
            type: "phone",
            placeholder: "phone",
            value: user.phone
        });
        this.addressInput = new InputComponent({
            id: "address",
            type: "text",
            placeholder: "your address",
            value: user.address
        });
        this.cityInput = new InputComponent({
            id: "city",
            type: "text",
            placeholder: "your city",
            value: user.city
        });
        this.zipCodeInput = new InputComponent({
            id: "zipCode",
            type: "text",
            placeholder: "your zipCode",
            value: user.zipCode
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Password",
            value: user.password
        });
    }

    display(parent) {
        const container = document.createElement("register-form");
        const form = document.createElement("form");
        const kindZone = document.createElement("div");
        const surnameZone = document.createElement("div");
        const surnameLabel = document.createElement("label");
        const firstnameZone = document.createElement("div");
        const firstnameLabel = document.createElement("label");
        const lastnameZone = document.createElement("div");
        const lastnameLabel = document.createElement("label");
        const mailZone = document.createElement("div");
        const mailLabel = document.createElement("label");
        const phoneZone = document.createElement("div");
        const phoneLabel = document.createElement("label");
        const addressZone = document.createElement("div");
        const addressLabel = document.createElement("label");
        const cityZone = document.createElement("div");
        const cityLabel = document.createElement("label");
        const zipCodeZone = document.createElement("div");
        const zipCodeLabel = document.createElement("label");
        const passwordZone = document.createElement("div");
        const passwordLabel = document.createElement("label");
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
        surnameLabel.appendChild(document.createTextNode("Surname : "))
        surnameZone.appendChild(surnameLabel);
        form.appendChild(surnameZone);
        this.surnameInput.display(surnameZone);
        firstnameLabel.appendChild(document.createTextNode("Firstname : "))
        firstnameZone.appendChild(firstnameLabel);
        form.appendChild(firstnameZone);
        this.firstnameInput.display(firstnameZone);
        lastnameLabel.appendChild(document.createTextNode("Lastname : "))
        lastnameZone.appendChild(lastnameLabel);
        form.appendChild(lastnameZone);
        this.lastnameInput.display(lastnameZone);
        mailLabel.appendChild(document.createTextNode("Mail : "))
        mailZone.appendChild(mailLabel);
        form.appendChild(mailZone);
        this.mailInput.display(mailZone);
        phoneLabel.appendChild(document.createTextNode("Phone : "))
        phoneZone.appendChild(phoneLabel);
        form.appendChild(phoneZone);
        this.phoneInput.display(phoneZone);
        addressLabel.appendChild(document.createTextNode("Address : "))
        addressZone.appendChild(addressLabel);
        form.appendChild(addressZone);
        this.addressInput.display(addressZone);
        cityLabel.appendChild(document.createTextNode("City : "))
        cityZone.appendChild(cityLabel);
        form.appendChild(cityZone);
        this.cityInput.display(cityZone);
        zipCodeLabel.appendChild(document.createTextNode("Zip Code : "))
        zipCodeZone.appendChild(zipCodeLabel);
        form.appendChild(zipCodeZone);
        this.addressInput.display(zipCodeZone);
        passwordLabel.appendChild(document.createTextNode("Password : "))
        passwordZone.appendChild(passwordLabel);
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
        
        // Tout ce qui est commenté fonctionne (si on enlève les this.input et qu'on les remplace par input dans le input.component.js,
        // il faut aussi supprimer la méthode value() dans le input.component.js )
        // toutefois cela donne une méthode trop longue !!!
        // donc on la laisse tomber et on utilise ce qui est non commenté 

        // const surnameId = document.getElementById("surname");
        // let surnameValue = surnameId.value;
        // const firstnameId = document.getElementById("firstname");
        // let firstnameValue = firstnameId.value;
        // const lastnameId = document.getElementById("lastname");
        // let lastnameValue = lastnameId.value;
        // const mailId = document.getElementById("mail");
        // let mailValue = mailId.value;
        
        // console.log(surnameValue, firstnameValue, lastnameValue, mailValue);

        // this.user.surname = surnameValue;
        // this.user.firstname = firstnameValue;
        // this.user.lastname = lastnameValue;
        // this.user.mail = mailValue;

        this.user.surname = this.surnameInput.input.value;
        this.user.firstname = this.firstnameInput.input.value;
        this.user.lastname = this.lastnameInput.input.value;
        this.user.mail = this.mailInput.input.value;
        this.user.city = this.cityInput.input.value;
    };

}