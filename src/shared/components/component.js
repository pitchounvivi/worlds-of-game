export class Component {

    constructor() {
        
    }

    setAttributesTo(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    
}