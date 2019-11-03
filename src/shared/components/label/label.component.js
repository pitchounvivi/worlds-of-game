export class LabelComponent {

    constructor(text, attributes) {
        this.text = text;
        this.attributes = attributes;
    }

    display(parent) {
        const label = document.createElement("label");
        label.appendChild(document.createTextNode(this.text));

        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key)) {
                label.setAttribute(key, this.attributes[key]);
            }
        }
        parent.appendChild(label);
    }
}