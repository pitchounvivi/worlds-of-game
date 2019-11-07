import { InputComponent } from "../../../shared/components/input/input.component";
import { ButtonComponent } from "../../../shared/components/button/button.component";

export class LoginFormComponent{

    constructor() {
        this.loginInput = new InputComponent({
            id: "login",
            type: "mail",
            placeholder: "Your address mail",
            value: "user"
        });
        this.passwordInput = new InputComponent({
            id: "password",
            type: "password",
            placeholder: "Your password",
            value: "user"
        });
        this.goButton = new ButtonComponent(
            "Go",
            {
                type: "submit",
                value: "go"
            }
        )
        this.registerButton = new ButtonComponent(
            "Register",
            {
                type: "submit",
                value: "register"
            }
        )  
    }

    display(parent){
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
        this.registerButton.display(this.form);

        parent.appendChild(element);

    }

}