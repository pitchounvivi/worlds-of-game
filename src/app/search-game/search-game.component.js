import { TitleComponent } from "../../shared/components/title/title.component";
import { SearchGameFormComponent } from "./search-game-form/search-game-form.component";
//import { ReturnButtonComponent } from "../../shared/components/return-button/return-button.component";

export class SearchGameComponent{
    constructor(user){
        this.user = user;
        this.title = new TitleComponent("Search Game");
        this.searchGameForm = new SearchGameFormComponent(this.user);
        //.returnButton = new ReturnButtonComponent("Return");
    }

    display(){
        const parent = document.createElement("div");
        this.title.display(parent);
        this.searchGameForm.display(parent);
        //this.returnButton.display(parent);

        document.body.appendChild(parent);
    }
}