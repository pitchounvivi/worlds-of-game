import { TitleComponent } from "../../shared/components/title/title.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

export class RegisterComponent {

    constructor(){
        this.title = new TitleComponent("Register");
        this.registerForm = new RegisterFormComponent();
    }

    display(){
        const parent = document.createElement("div");
        this.title.display(parent);
        this.registerForm.display(parent);

        document.body.appendChild(parent);
    }
}