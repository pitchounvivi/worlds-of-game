import { TitleComponent } from "../../shared/components/title/title.component";
//import { User } from "../../shared/models/user.model";
import { RegisterFormComponent } from "./register-form/register-form.component";

export class RegisterComponent {

    constructor(user){
        this.user = user;
        this.title = new TitleComponent("Register");
        this.registerForm = new RegisterFormComponent(this.user);
    }

    display(){
        const parent = document.createElement("div");
        this.title.display(parent);
        this.registerForm.display(parent);

        document.body.appendChild(parent);
    }
}