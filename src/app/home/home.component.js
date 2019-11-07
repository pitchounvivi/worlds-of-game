import { LogoComponent } from "../../shared/components/logo/logo.component";
import { TitleComponent } from "../../shared/components/title/title.component";
import { ButtonComponent } from "../../shared/components/button/button.component";
import { ZoneDisplayComponent } from "../../shared/components/zone-display/zone-display.component";

export class HomeComponent {

    constructor() {
        this.logo = new LogoComponent("assets/images/logo3.png", "Le LOGO de l'application");
        this.title = new TitleComponent("Welcome to Game Session Society");
        this.question = new ZoneDisplayComponent("Ready for a Game Party ?");
        this.proposeButton = new ButtonComponent(
            "Proposed Game",
            {
                type: "submit",
                value: "propose"
            }
        );
        this.searchButton = new ButtonComponent(
            "Search Game",
            {
                type: "submit",
                value: "search"
            }
        );
        this.returnButton = new ButtonComponent(
            "Return",
            {
                type: "submit",
                value: "return"
            }
        );
    }

    display(parent) {
        this.logo.display(parent);
        this.title.display(parent);
        this.question.display(parent);
        this.proposeButton.display(parent);
        this.searchButton.display(parent);
        this.returnButton.display(parent);
        
        document.body.appendChild(parent);
    }
}