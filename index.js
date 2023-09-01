import data from "./data.js";
import { character } from "./Character.js";
console.log(data);


class App extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <p>hola<p>
        `
    }
}

customElements.define("app-container", App);