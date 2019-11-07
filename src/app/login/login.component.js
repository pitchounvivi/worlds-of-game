import { TitleComponent } from "../../shared/components/title/title.component";
import { LogoComponent } from "../../shared/components/logo/logo.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { RegisterComponent } from "../register/register.component";

export class LoginComponent {

    constructor() {
        this.logo = new LogoComponent("assets/images/logo3.png","Le LOGO de l'application");
        this.title = new TitleComponent("Game session / Worlds of Game");
        this.loginForm = new LoginFormComponent();
        this.registerButton = new ButtonComponent(
            "Register",
            {
                type: "submit",
                value: "register"
            });
        
    }

    display(parent){
        this.logo.display(parent);
        this.title.display(parent);
        this.loginForm.display(parent);
        this.registerButton.display(parent);

        document.body.appendChild(parent);

        this.registerButton.button.addEventListener(
            "click",
            (event) => {
                this.clickButton(event);
                
            }
        );
    }

    clickButton(event) {
        event.preventDefault();

        this.postStart();
        this.postSuccess();
        this.postEnd();
    }

    postStart() {
        console.log("Start");
        
    }

    postEnd() {
        console.log("End");
        
    }

    postSuccess(user) {
        console.log("Success");

        window.history.pushState(
            {},
            "Register Page",
            "/Register"
        )

        document.body.innerHTML = "";
        const register = new RegisterComponent();
        register.display(parent);

    }

}