import { InputComponent } from "../../../shared/components/input/input.component";

export class SearchGameFormComponent {
    constructor(user) {
        this.dateInput = new InputComponent({
            type: "date",
            name: "date"
        });
        this.nameGameInput = new InputComponent({
            type: "text",
            name: "nameGame"
        });
        this.cityInput = new InputComponent({
            type: "text",
            name: "city",
            value: user.address
        });
    }

    display(parent) {
        const containerElement = document.createElement("search-game-form");
        const form = document.createElement("form");
        const dateZone = document.createElement("div");
        const dateLabel = document.createElement("label");
        const selectZone = document.createElement("div");
        const selectLabel = document.createElement("label");
        const select = document.createElement("select");
        const nameGameZone = document.createElement("div");
        const nameGameLabel = document.createElement("label");
        const cityZone = document.createElement("div");
        const cityLabel = document.createElement("label");
        const searchButton = document.createElement("button");
        const locateButton = document.createElement("button");

        containerElement.appendChild(form);
        form.appendChild(dateZone);

        dateLabel.appendChild(document.createTextNode("Date : "))
        dateZone.appendChild(dateLabel);
        form.appendChild(dateZone);
        this.dateInput.display(dateZone);

        selectLabel.appendChild(document.createTextNode("Type : "))
        selectZone.appendChild(selectLabel);
        selectZone.appendChild(select); // à finir
        form.appendChild(selectZone);

        nameGameLabel.appendChild(document.createTextNode("Name Game : "))
        nameGameZone.appendChild(nameGameLabel);
        form.appendChild(nameGameZone);
        this.nameGameInput.display(nameGameZone);

        cityLabel.appendChild(document.createTextNode("City : "))
        cityZone.appendChild(cityLabel);
        form.appendChild(cityZone);
        this.cityInput.display(cityZone);

        searchButton.setAttribute("type", "submit");
        searchButton.appendChild(document.createTextNode("Search"));
        form.appendChild(searchButton);
        form.appendChild(document.createTextNode("or"));
        locateButton.setAttribute("type", "submit");
        locateButton.appendChild(document.createTextNode("Locate"));
        form.appendChild(locateButton);

        searchButton.addEventListener(
            "click",
            (event) => {         
                this.clickButton(event); 
            }
        );

        parent.appendChild(containerElement);
    }

    clickButton(event) {
        event.preventDefault();
        console.log("Hello");      
    }
}