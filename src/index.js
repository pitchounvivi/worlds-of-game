import { LogoComponent } from "./shared/component/logo.component";
import { TitleComponent } from "./shared/component/title.component";
import { RegisterButtonComponent } from "./shared/component/register-button.component";
import { LoginFormComponent } from "./shared/component/login-form.component";
import { User } from "./shared/models/user.models";


const user = new User("John", "secret");

const parent = document.createElement("div");

new LogoComponent(parent);

new TitleComponent(parent, "Game Session / Worlds of Game");

new LoginFormComponent(parent,user);

new RegisterButtonComponent(parent,"Register");

document.body.appendChild(parent);