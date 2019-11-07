import { InputComponent } from "../../../shared/components/input/input.component";
import { LabelComponent } from "../../../shared/components/label/label.component";
import { UserService } from "../../../shared/services/user.service";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { AlertComponent } from "../../../shared/components/alert/alert.component";

export class RegisterFormComponent {

    constructor() {
        this.user = UserService.get();
        this.alertError = new AlertComponent();
        this.saveButton = new ButtonComponent(
            "create Account",
            {
                type: "submit",
                value: "save"
            }
        );
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
            value: "",
            label: "Surname : "
        });
        this.firstnameInput = new InputComponent({
            id: "firstname",
            type: "text",
            placeholder: "firstname",
            value: "",
            label: "Firstname : "
        });
        this.lastnameInput = new InputComponent({
            id: "lastname",
            type: "text",
            placeholder: "lastname",
            value: "",
            label: "Lastname : "
        });
        this.mailInput = new InputComponent({
            id: "mail",
            type: "mail",
            placeholder: "Email",
            value: "",
            label: "Mail : "
        });
        this.phoneInput = new InputComponent({
            id: "phone",
            type: "phone",
            placeholder: "phone",
            value: "",
            label: "Phone : "
        });
        this.addressInput = new InputComponent({
            id: "address",
            type: "text",
            placeholder: "your address",
            value: "",
            label: "Address : "
        });
        this.cityInput = new InputComponent({
            id: "city",
            type: "text",
            placeholder: "your city",
            value: "",
            label: "City : "
        });
        this.zipCodeInput = new InputComponent({
            id: "zipCode",
            type: "text",
            placeholder: "your zipCode",
            value: "",
            label: "Zip Code : "
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Password",
            value: "",
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
        this.clearButton = document.createElement("button");

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

        this.clearButton.setAttribute("type", "submit");
        this.clearButton.setAttribute("value", "clear");

        this.clearButton.appendChild(document.createTextNode("Reset"));
        this.form.appendChild(this.clearButton);
        this.saveButton.display(this.form);

        // cette écriture permet d'accéder à l'élément button 
        // qui est dans ButtonComponent 
        // ce qui permet de mettre l'évènement sur le bouton
        this.saveButton.button.addEventListener(
            "click",
            (event) => {
                this.clickButton(event);
            }
        );

        parent.appendChild(container);
    }

    clickButton(event) {
        event.preventDefault();

        // //gestion des buttons radio ==> à modifier + pb de retour de valeur
        // if (this.genderMrInput.checked === true) {
        //     this.user.gender = this.genderMrInput.input.value;
        // }
        // else {
        //     this.user.gender = this.genderMmeInput.input.value;
        // }

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
        this.loading.display(this.form);
        this.saveButton.hide();

        if (this.alertError.element && this.alertError.element.parentNode) {
            this.alertError.hide();
        }
    }

    postEnd() {
        console.log("End");
        this.loading.hide();
        this.saveButton.display(this.form);
        this.saveButton.button.addEventListener(
            "click",
            (event) => {
                this.clickButton(event);
            }
        );
    }

    postSuccess(user) {
        console.log("Success");
    }

    postError(status) {
        console.log("Error");
        if (412 === status) {
            this.alertError.error = "Bad model";
            this.alertError.display(this.form);
        }
        else if (409 === status){
            this.alertError.error = "Account already created";
            this.alertError.display(this.form);
        }
        else if (404 === status){
            this.alertError.error = "File not found";
            this.alertError.display(this.form);
        }
        else if (500 === status){
            this.alertError.error = "Server Error";
            this.alertError.display(this.form);
        }
        else if (0 === status){
            this.alertError.error = "Network Error";
            this.alertError.display(this.form);
        }
        else{
            this.alertError.error = "I don't know !!!";
            this.alertError.display(this.form);
        }
    }
}