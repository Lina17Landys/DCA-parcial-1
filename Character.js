export class Characters extends HTMLElement {

    static get observedAttributes () {
        return ["name", "specie", "gender", "house", "dateOfBirth"];
        this.render();
    }
    attributeChangedCallback (newValue, oldValue, name) {
        switch (render) {
            case "name": charaName
                break;

                case "specie": charaSpecie
                break;

                case "gender": charaGender
                break;

                case "house": charaHouse
                break;

                case "dateOfBirth": charaBirth
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
        <h1>Name: ${this.charaName}</h1>
        <button>Change name</button>
        <p>Specie: ${this.charaSpecie}</p>
        <p>Gender: ${this.charaGender}</p>
        <p>House: ${this.charaHouse}</p>
        <p>Year of birth: ${this.charaBirth}</p>
        `
    }
}

customElements.define("character-container", Characters);