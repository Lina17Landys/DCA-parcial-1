import data from "./data.js";
import { Characters } from "./Character.js";
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
   const charas = data.map ((chara) => `
<character-container  name=${chara.name} species=${chara.species} 
gender=${chara.gender} house= ${chara.house} Year of birth=${chara.charaBirth}
></character-container>`

    )
    const charasJoined = charas.join("");
    this.shadowRoot.innerHTML = `${charasJoined}`;
    }
}



customElements.define("app-container", App)