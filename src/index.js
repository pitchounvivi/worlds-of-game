//import { LoginComponent } from "./app/login/login.component";
//import { RegisterComponent } from "./app/register/register.component";
import { HomeComponent } from "./app/home/home.component";


const parent = document.createElement("div");

// const loginComponent = new LoginComponent();
// loginComponent.display(parent);

// const registerComponent = new RegisterComponent();
// registerComponent.display(parent);

const homeComponent = new HomeComponent();
homeComponent.display(parent);

document.body.appendChild(parent);

