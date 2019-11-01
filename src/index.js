import { LogoComponent } from "./shared/components/logo.component";
import { TitleComponent } from "./shared/components/title.component";
import { RegisterButtonComponent } from "./shared/components/register-button.component";
import { LoginFormComponent } from "./shared/components/login-form.component";
import { User } from "./shared/models/user.model";


const user = new User("John", "secret");

const parent = document.createElement("div");

new LogoComponent(parent);

new TitleComponent(parent, "Game Session / Worlds of Game");

new LoginFormComponent(parent,user);

new RegisterButtonComponent(parent,"Register");

document.body.appendChild(parent);