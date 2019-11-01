export class TitleComponent {

    constructor(parent, title) {
        const containerElement = document.createElement("div");
        const titleElement = document.createElement("h1");
        const titleText = document.createTextNode(title);

        titleElement.appendChild(titleText);

        containerElement.appendChild(titleElement);
        parent.appendChild(containerElement);
    }

}