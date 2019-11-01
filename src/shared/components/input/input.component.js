import { Component } from "../component";

export class InputComponent extends Component {

    constructor() {
        super();      
    }

    display(parent) {
        const inputElement = document.createElement("input");

        setAttributesTo(inputElement, attributes);

        parent.appendChild(inputElement);
    }

}