import { TitleComponent } from "../../shared/components/title/title.component";

export class SearchGameComponent{
    constructor(){
        this.title = new TitleComponent("Search Game");
        }

    display(){
        const parent = document.createElement("div");
        this.title.display(parent);
        
        document.body.appendChild(parent);
    }
}