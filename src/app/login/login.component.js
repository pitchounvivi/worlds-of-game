import { LogoComponent } from "../../shared/components/logo/logo.component";
import { TitleComponent } from "../../shared/components/title/title.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { RegisterButtonComponent } from "./register-button/register-button.component";


export class LoginComponent {

    constructor() {
        this.src = "?";
        this.alt = "?";
        this.text = "?";
        this.loginName = "?";
        this.registerName = "?";
        this.user = "?";
    }

    display(parent){
        let logoComponent = new LogoComponent();
        logoComponent.src = this.src;
        logoComponent.alt = this.alt;
        logoComponent.display(parent);

        let titleComponent = new TitleComponent();
        titleComponent.text =  this.text;
        titleComponent.display(parent);

        let loginFormComponent = new LoginFormComponent();
        loginFormComponent.name = this.loginName;
        loginFormComponent.user = this.user;
        loginFormComponent.display(parent);

        let registerButtonComponent = new RegisterButtonComponent();
        registerButtonComponent.name = this.registerName;
        registerButtonComponent.display(parent);
    }

}