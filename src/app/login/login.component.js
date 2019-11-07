import { TitleComponent } from "../../shared/components/title/title.component";
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { LoginFormComponent } from "./login-form/login-form.component";

export class LoginComponent {

    constructor() {
        // this.loginName = "?";
        // this.registerName = "?";
        // this.user = "?";

        this.logo = new LogoComponent("../www/assets/images/logo3.png","Le LOGO de l'application");
        this.title = new TitleComponent("Game session / Worlds of Game");
        //this.loginForm = new LoginFormComponent();
        this.loginForm = new LoginFormComponent();

    }

    display(parent){
        // let loginFormComponent = new LoginFormComponent();
        // loginFormComponent.name = this.loginName;
        // loginFormComponent.user = this.user;
        // loginFormComponent.display(parent);

        // let registerButtonComponent = new RegisterButtonComponent();
        // registerButtonComponent.name = this.registerName;
        // registerButtonComponent.display(parent);

        this.logo.display(parent);
        this.title.display(parent);
        this.loginForm.display(parent);

        document.body.appendChild(parent);
    }

}