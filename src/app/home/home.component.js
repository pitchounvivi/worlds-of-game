import { LogoComponent } from "../../shared/components/logo/logo.component";
import { TitleComponent } from "../../shared/components/title/title.component";

export class HomeComponent{

    constructor(){
        this.logo = new LogoComponent("assets/images/logo3.png","Le LOGO de l'application");
        this.title = new TitleComponent("Welcome to Game Session Society");
    }

    display(parent){
        this.logo.display(parent);
        this.title.display(parent);

        let question = document.createElement("p");
        question = document.createTextNode("Ready for a Game Party ?");

        parent.appendChild(question);
        document.body.appendChild(parent);
    }
}