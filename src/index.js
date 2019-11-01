import { LogoComponent } from "./shared/component/logo.component";
import { TitleComponent } from "./shared/component/title.component";

const parent = document.createElement("div");

new LogoComponent(parent);

new TitleComponent(parent, "Game Session / Worlds of Game");

document.body.appendChild(parent);