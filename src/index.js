import { User } from "./shared/models/user.model";
//import { LoginComponent } from "./app/login/login.component";
import { RegisterComponent } from "./app/register/register.component";

const user = new User("John", "secret");
const parent = document.createElement("div");

// let loginComponent = new LoginComponent();
// loginComponent.src = "assets/images/logo/logo.png";
// loginComponent.alt = "Le LOGO de l'application";
// loginComponent.text = "Game Session / Worlds of Game";
// loginComponent.loginName = "Go";
// loginComponent.registerName = "Register";
// loginComponent.user = user;
// loginComponent.display(parent);

const registerComponent = new RegisterComponent(user);
registerComponent.display(parent);

document.body.appendChild(parent);

console.log(user);