import { InputComponent } from "../../../shared/components/input/input.component";
import { LabelComponent } from "../../../shared/components/label/label.component";
import { UserService } from "../../../shared/services/user.service";
import { LoadingComponent } from "../../../shared/loading/loading.component";

export class RegisterFormComponent {

    constructor() {
        this.user = UserService.get();
        this.loading = new LoadingComponent();
        this.genderMrLabel = new LabelComponent("Mr : ", {
            for: "Mr"
        });
        this.genderMmeLabel = new LabelComponent(" Mme : ", {
            for: "Mme"
        });
        this.genderMrInput = new InputComponent({
            type: "radio",
            name: "kind",
            value: "Mr"
        });
        this.genderMmeInput = new InputComponent({
            type: "radio",
            name: "kind",
            value: "Mme"
        });
        this.surnameInput = new InputComponent({
            id: "surname",
            type: "text",
            placeholder: "surname",
            value: this.user.surname,
            label: "Surname : "
        });
        this.firstnameInput = new InputComponent({
            id: "firstname",
            type: "text",
            placeholder: "firstname",
            value: this.user.firstName,
            label: "Firstname : "
        });
        this.lastnameInput = new InputComponent({
            id: "lastname",
            type: "text",
            placeholder: "lastname",
            value: this.user.lastName,
            label: "Lastname : "
        });
        this.mailInput = new InputComponent({
            id: "mail",
            type: "mail",
            placeholder: "Email",
            value: this.user.email,
            label: "Mail : "
        });
        this.phoneInput = new InputComponent({
            id: "phone",
            type: "phone",
            placeholder: "phone",
            value: this.user.phone,
            label: "Phone : "
        });
        this.addressInput = new InputComponent({
            id: "address",
            type: "text",
            placeholder: "your address",
            value: this.user.adress,
            label: "Address : "
        });
        this.cityInput = new InputComponent({
            id: "city",
            type: "text",
            placeholder: "your city",
            value: this.user.city,
            label: "City : "
        });
        this.zipCodeInput = new InputComponent({
            id: "zipCode",
            type: "text",
            placeholder: "your zipCode",
            value: this.user.zip,
            label: "Zip Code : "
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Password",
            value: this.user.password,
            label: "Password : "
        });
    }

    display(parent) {
        const container = document.createElement("register-form");
        this.form = document.createElement("form");
        const genderZone = document.createElement("div");
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
        this.saveButton = document.createElement("button");

        this.form.setAttribute("method", "post");
        this.form.setAttribute("action", "");

        container.appendChild(this.form);
        this.form.appendChild(genderZone);
        this.genderMrLabel.display(genderZone);
        this.genderMrInput.display(genderZone);
        this.genderMmeLabel.display(genderZone);
        this.genderMmeInput.display(genderZone);
        this.form.appendChild(surnameZone);
        this.surnameInput.display(surnameZone);
        this.form.appendChild(firstnameZone);
        this.firstnameInput.display(firstnameZone);
        this.form.appendChild(lastnameZone);
        this.lastnameInput.display(lastnameZone);
        this.form.appendChild(mailZone);
        this.mailInput.display(mailZone);
        this.form.appendChild(phoneZone);
        this.phoneInput.display(phoneZone);
        this.form.appendChild(addressZone);
        this.addressInput.display(addressZone);
        this.form.appendChild(cityZone);
        this.cityInput.display(cityZone);
        this.form.appendChild(zipCodeZone);
        this.zipCodeInput.display(zipCodeZone);
        this.form.appendChild(passwordZone);
        this.passwordInput.display(passwordZone);

        clearButton.setAttribute("type", "submit");
        clearButton.setAttribute("value", "clear");
        this.saveButton.setAttribute("type", "submit");
        this.saveButton.setAttribute("value", "save");

        clearButton.appendChild(document.createTextNode("Reset"));
        this.saveButton.appendChild(document.createTextNode("Create Account"));
        this.form.appendChild(clearButton);
        this.form.appendChild(this.saveButton);

        this.saveButton.addEventListener(
            "click",
            (event) => {
                this.clickButton(event);
            }
        );

        parent.appendChild(container);
    }

    clickButton(event) {
        event.preventDefault();
        console.log(this.user);

        //gestion des buttons radio
        if (this.genderMrInput.checked === true) {
            this.user.gender = this.genderMrInput.input.value;
        }
        else {
            this.user.gender = this.genderMmeInput.input.value;
        }

        this.user.surname = this.surnameInput.input.value;
        this.user.firstName = this.firstnameInput.input.value;
        this.user.lastName = this.lastnameInput.input.value;
        this.user.email = this.mailInput.input.value;
        this.user.phone = this.phoneInput.input.value;
        this.user.adress = this.addressInput.input.value;
        this.user.city = this.cityInput.input.value;
        this.user.zip = this.zipCodeInput.input.value;
        this.user.password = this.passwordInput.input.value;

        this.postStart();
        //UserService.post est une promesse
        UserService
            .post()
            .then((data) => {
                this.postSuccess(data);
                this.postEnd();
            }
            ).catch((xhr) => {
                this.postError(xhr.status);
                this.postEnd();
            });
    }

    postStart() {
        console.log("Start");
        this.loading.display(this.saveButton.parentNode);
        this.form.removeChild(this.saveButton);   
    }

    postEnd() {
        console.log("End");
    }

    postSuccess(user) {
        console.log("Success");
    }

    postError(status) {
        console.log("Error");
    }
}