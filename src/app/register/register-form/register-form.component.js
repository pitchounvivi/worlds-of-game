import { InputComponent } from "../../../shared/components/input/input.component";

export class RegisterFormComponent {

    constructor(user) {
        this.user = user;
        this.mail = new InputComponent({
            type: "mail",
            placeholder: "Email",
            value: user.login
        });
        this.password = new InputComponent({
            type: "password",
            placeholder: "Password",
            value: user.password
        });
    }

    display(parent) {
        const container = document.createElement("register-form");
        const form = document.createElement("form");
        //const button = document.createElement("button");

        form.setAttribute("method", "post");
        form.setAttribute("action", "");
        //button.setAttribute("type", "submit");

        container.appendChild(form);
        //form.appendChild(button);
        //button.appendChild(document.createTextNode("Create Account"));
        this.mail.display(form);
        this.password.display(form);
        parent.appendChild(container);
    }
}