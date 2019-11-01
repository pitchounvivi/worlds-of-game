import { LogoComponent } from "./shared/components/logo.component";
import { TitleComponent } from "./shared/components/title.component";
import { RegisterButtonComponent } from "./shared/components/register-button.component";
import { LoginFormComponent } from "./shared/components/login-form.component";
import { User } from "./shared/models/user.model";


const user = new User("John", "secret");

const parent = document.createElement("div");

let logoComponent = new LogoComponent();
logoComponent.src = "assets/images/logo/logo.png";
logoComponent.alt = "Le LOGO de l'application";
logoComponent.display(parent);

let titleComponent = new TitleComponent();
titleComponent.text = "Game Session / Worlds of Game";
titleComponent.display(parent);

new LoginFormComponent(parent, user);

let registerButtonComponent = new RegisterButtonComponent();
registerButtonComponent.name = "Register";
registerButtonComponent.display(parent);

document.body.appendChild(parent);

console.log(user)