import { TitleComponent } from "../../shared/components/title/title.component";
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterButtonComponent } from "./register-button/register-button.component";

export class LoginComponent {

    constructor() {
        this.logo = new LogoComponent("assets/images/logo3.png","Le LOGO de l'application");
        this.title = new TitleComponent("Game session / Worlds of Game");
        this.loginForm = new LoginFormComponent();
        this.registerButton = new RegisterButtonComponent("Register");
    }

    display(parent){
        this.logo.display(parent);
        this.title.display(parent);
        this.loginForm.display(parent);
        this.registerButton.display(parent);

        document.body.appendChild(parent);
    }

}