export class InputComponent {

    constructor(attributes) {
        this.attributes = attributes;
    }

    display(parent) {
        const input = document.createElement("input");
        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key)) {
                input.setAttribute(key, this.attributes[parseInt(key)]);
            }
        }
        parent.appendChild(input);
    }


}