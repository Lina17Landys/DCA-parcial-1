export class Characters extends HTMLElement {
   
   static get observedAttributes () {
switch (key) {
    case value:
        
        break;

    default:
        break;
}
   }
   
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

customElements.define("character-container", Characters);