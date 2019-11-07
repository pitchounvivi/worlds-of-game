import { InputComponent } from "../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";
import { UserService } from "../../../shared/services/user.service";
import { LoadingComponent } from "../../../shared/components/loading/loading.component";
import { AlertComponent } from "../../../shared/components/alert/alert.component";

export class LoginFormComponent {

    constructor() {
        this.user = UserService.get();
        this.loginInput = new InputComponent({
            id: "login",
            type: "mail",
            placeholder: "Your address mail",
            value: ""
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Your password",
            value: ""
        });
        this.goButton = new ButtonComponent(
            "Go",
            {
                type: "submit",
                value: "go"
            }
        );
        this.loading = new LoadingComponent();
        this.alertError = new AlertComponent();
    }

    display(parent) {
        const element = document.createElement("login-form");
        this.form = document.createElement("form");
        const loginZone = document.createElement("div");
        const passwordZone = document.createElement("div");

        this.form.setAttribute("method", "post");
        this.form.setAttribute("action", "");

        element.appendChild(this.form);
        this.form.appendChild(loginZone);
        this.loginInput.display(this.form);
        this.form.appendChild(passwordZone);
        this.passwordInput.display(passwordZone);
        this.goButton.display(this.form);


        this.goButton.button.addEventListener(
            "click",
            (event) => {
                this.clickButton(event);
            }
        );

        parent.appendChild(element);
    }

    clickButton(event) {
        event.preventDefault();

        this.user.email = this.loginInput.input.value;
        this.user.password = this.passwordInput.input.value;

        this.postStart();
        UserService
            .postLogin()
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
        this.goButton.hide();

        if (this.alertError.element && this.alertError.element.parentNode) {
            this.alertError.hide();
        }
    }

    postEnd() {
        console.log("End");
        this.loading.hide();
        this.goButton.display(this.form);
        this.goButton.button.addEventListener(
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
        else if (409 === status) {
            this.alertError.error = "Account already created";
            this.alertError.display(this.form);
        }
        else if (404 === status) {
            this.alertError.error = "File not found";
            this.alertError.display(this.form);
        }
        else if (500 === status) {
            this.alertError.error = "Server Error";
            this.alertError.display(this.form);
        }
        else if (0 === status) {
            this.alertError.error = "Network Error";
            this.alertError.display(this.form);
        }
        else {
            this.alertError.error = "I don't know !!!";
            this.alertError.display(this.form);
        }
    }
}