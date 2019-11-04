import { LabelComponent } from "../label/label.component";

export class InputComponent {

    constructor(attributes) {
        this.attributes = attributes;
        this.label = null;
        this.input = null;

        if (attributes.label) {
            this.label = new LabelComponent(attributes.label, attributes.label.value);
        }
    }

    display(parent) {
        this.input = document.createElement("input");
        for (const key in this.attributes) {
            if (key === "label"){
                continue; //continue permet de sauter la ligne et passe à la suite des arguments
            }
            if (this.attributes.hasOwnProperty(key)) {
                this.input.setAttribute(key, this.attributes[key]);
            }
        }

        if(this.label){
            this.label.display(parent);
        }
        

        parent.appendChild(this.input);
    }

    value() {
        return this.input.value;
    }
}