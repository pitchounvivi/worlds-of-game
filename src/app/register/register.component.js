import { TitleComponent } from "../../shared/components/title/title.component";
import { User } from "../../shared/models/user.model";

export class RegisterComponent {

    constructor(){
        this.title = new TitleComponent("Register");
    }

    display(){
        const parent = document.createElement("div");
        this.title.display(parent);

        document.body.appendChild(parent);
    }
}