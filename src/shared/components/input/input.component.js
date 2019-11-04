export class InputComponent {

    constructor(attributes) {
        this.attributes = attributes;
        this.input = null;
    }

    display(parent) {
        this.input = document.createElement("input");
        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key)) {
                this.input.setAttribute(key, this.attributes[key]);
            }
        }
        parent.appendChild(this.input);
    }

    value() {
        return this.input.value;
    }
}