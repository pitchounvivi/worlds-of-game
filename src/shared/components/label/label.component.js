export class LabelComponent {

    constructor(text) {
        this.text = text;     
    }

    display(parent) {
        const label = document.createElement("label");
        label.appendChild(document.createTextNode(this.text));

        parent.appendChild(label);
    }
}