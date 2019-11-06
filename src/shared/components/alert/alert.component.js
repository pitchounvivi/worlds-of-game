export class AlertComponent {
    constructor(error) {
        this.error = error;
    }

    display(parent) {
        this.element = document.createElement("p");
        this.element.appendChild(document.createTextNode(this.error));
        //parent.parentNode.insertBefore(this.errorElement, parent); //s'insère avant le formulaire
        parent.insertBefore(this.element, parent.firstChild); //s'insère en premier enfant du formulaire
    }

    hide() {
        this.element.parentNode.removeChild(this.element);
    }
}