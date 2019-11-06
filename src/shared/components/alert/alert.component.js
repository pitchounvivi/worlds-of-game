export class AlertComponent {
    constructor(error) {
        this.error = error;
    }

    display(parent) {
        this.errorElement = document.createElement("p");
        this.errorElement.appendChild(document.createTextNode(this.error));
        //parent.parentNode.insertBefore(this.errorElement, parent); //s'insère avant le formulaire
        parent.insertBefore(this.errorElement, parent.firstChild); //s'insère en premier enfant du formulaire
    }

    hide() {
        this.errorElement.parentNode.removeChild(this.errorElement);
    }
}