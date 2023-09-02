export class Characters extends HTMLElement {

    static get observedAttributes () {
        return ["name", "specie", "gender", "house", "dateOfBirth"];
       
    }
    attributeChangedCallback (propName, _, newValue ) {
        switch (propName) {
            case "name": this.charaName = newValue
                break;

                case "species": this.charaSpecies = newValue
                break;

                case "gender": this.charaGender = newValue
                break;

                case "house": this.charaHouse = newValue
                break;

                case "dateOfBirth": this.charaBirth = newValue
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
        <link rel="stylesheet" href="index.css">
        <section>
        <h1>Name: ${this.charaName}</h1>
        <button>Change name</button>
        <p>Species: ${this.charaSpecies}</p>
        <p>Gender: ${this.charaGender}</p>
        <p>House: ${this.charaHouse}</p>
        <p>Year of birth: ${this.charaBirth}</p>
        </section>
        `
    }
}

customElements.define("character-container", Characters);