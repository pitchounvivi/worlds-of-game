import { Component } from "../component";

export class ButtonComponent extends Component {
    constructor(text,attributes) {
        super();
        this.text = text;
        this.attributes = attributes;
    }

    display(parent) {
        this.button = document.createElement("button");
        let buttonText = document.createTextNode(this.text);

        this.setAttributesTo(this.button, this.attributes);
        this.button.appendChild(buttonText);

        parent.appendChild(this.button);
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }

}