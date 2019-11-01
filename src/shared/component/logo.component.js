export class LogoComponent {

    constructor(parent) {
        const containerElement = document.createElement("div");
        const logoElement = document.createElement("img");

        logoElement.setAttribute("src", "images/logo/logo.png");
        logoElement.setAttribute("alt", "logo de l'application");

        containerElement.appendChild(logoElement);
        parent.appendChild(containerElement);
    }

}