
// import { SearchGameComponent } from "./app/search-game/search-game.component";
//import { LoginComponent } from "./app/login/login.component";
import { RegisterComponent } from "./app/register/register.component";



const parent = document.createElement("div");

// let loginComponent = new LoginComponent();
// loginComponent.src = "assets/images/logo/logo.png";
// loginComponent.alt = "Le LOGO de l'application";
// loginComponent.text = "Game Session / Worlds of Game";
// loginComponent.loginName = "Go";
// loginComponent.registerName = "Register";
// loginComponent.user = user;
// loginComponent.display(parent);

const registerComponent = new RegisterComponent();
registerComponent.display(parent);

// const searchGameComponent = new  SearchGameComponent(user);
// searchGameComponent.display(parent);

document.body.appendChild(parent);

