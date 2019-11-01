export class LogoComponent {

    constructor (){
        this.src = "?";
        this.alt = "?";
    }

    display(parent){
        const containerElement = document.createElement("div");
        const logoElement = document.createElement("img");

        logoElement.setAttribute("src", this.src);
        logoElement.setAttribute("alt", this.alt);

        containerElement.appendChild(logoElement);
        parent.appendChild(containerElement);
    }


}