import { LogoComponent } from "./shared/component/logo.component";
import { TitleComponent } from "./shared/component/title.component";
import { RegisterButtonComponent } from "./shared/component/register-button.component";



const parent = document.createElement("div");

new LogoComponent(parent);

new TitleComponent(parent, "Game Session / Worlds of Game");

new RegisterButtonComponent(parent,"Register");

document.body.appendChild(parent);