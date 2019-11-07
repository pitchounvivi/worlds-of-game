//import { LogoComponent } from "../../shared/components/logo/logo.component";
import { TitleComponent } from "../../shared/components/title/title.component";
//import { LoginFormComponent } from "./login-form/login-form.component";


export class LoginComponent {

    constructor() {
        // this.src = "?";
        // this.alt = "?";
        // this.text = "?";
        // this.loginName = "?";
        // this.registerName = "?";
        // this.user = "?";

        //this.logo = new LogoComponent("assets/images/logo/logo.png","Le LOGO de l'application");
        this.title = new TitleComponent("Game session / Worlds of Game");
        //this.loginForm = new LoginFormComponent();

    }

    display(parent){
        // let logoComponent = new LogoComponent();
        // logoComponent.src = this.src;
        // logoComponent.alt = this.alt;
        // logoComponent.display(parent);

        // let titleComponent = new TitleComponent();
        // titleComponent.text =  this.text;
        // titleComponent.display(parent);

        // let loginFormComponent = new LoginFormComponent();
        // loginFormComponent.name = this.loginName;
        // loginFormComponent.user = this.user;
        // loginFormComponent.display(parent);

        // let registerButtonComponent = new RegisterButtonComponent();
        // registerButtonComponent.name = this.registerName;
        // registerButtonComponent.display(parent);

        const enTete = document.createElement("div");
        //this.logo.display(enTete);
        this.title.display(parent);
        //this.loginForm.display(parent);

        document.body.appendChild(parent);
    }

}