class HeaderComponent extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`

        <!-PUT HEADER DIV SECTION HERE->

        `;
    }
}

customElements.define('header-component', HeaderComponent);






