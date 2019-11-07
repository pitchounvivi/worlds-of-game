import { TitleComponent } from "../../shared/components/title/title.component";
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { LoginFormComponent } from "./login-form/login-form.component";

export class LoginComponent {

    constructor() {
        // this.registerName = "?";
        // this.user = "?";

        this.logo = new LogoComponent("../www/assets/images/logo3.png","Le LOGO de l'application");
        this.title = new TitleComponent("Game session / Worlds of Game");
        this.loginForm = new LoginFormComponent();

    }

    display(parent){
        this.logo.display(parent);
        this.title.display(parent);
        this.loginForm.display(parent);

        document.body.appendChild(parent);
    }

}