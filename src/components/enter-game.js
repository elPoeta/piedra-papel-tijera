class EnterGame extends HTMLElement {
    constructor() {
        super();
        this.userName;
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML =
            `<style>
            .ingresar, .error{
                display: flex;
                justify-self: center;
                margin: 0 auto;
                width:60%;
               }
               
               #user-name{
                   width: 80%;
                   padding: 8px;
                   font-size: 1.3em;
               }
               
               #btn-enter{
                width: 20%;
                border: none;
                border-bottom-right-radius: .5em;
                border-top-right-radius: .5em;
                background-color: #15a9ee;
                color: #fff;
                font-size: 1.3em;
               }
               
               #btn-enter:hover{
                   border-bottom-right-radius: .5em;
                   border-top-right-radius: .5em;
                   background-color: #7ccaee;
                   cursor: pointer;
               }
             </style>
            <section class="ingresar">
                <input type="text" id="user-name" placeholder="Ingresa tu nombre..." autofocus required />
                <button id="btn-enter">Jugar</button>
            </section>
        `;
        this.shadowRoot.querySelector('button').addEventListener('click', this._enterTheGame);
    }
    connectedCallback() {
        this.shadowRoot.querySelector('input').addEventListener('keypress', this._removeError);
    }
    _enterTheGame = e => {
        this.userName = this.shadowRoot.querySelector('input').value;
        if (this.userName) {
            const ingresarEvent = new Event('ingresar');
            this.dispatchEvent(ingresarEvent);
        } else {
            if (!document.querySelector(".error")) {
                const el = document.createElement("my-error");
                el.textContent = "Error por favor ingrese su nombre";
                el.className = "error";
                const parent = this.shadowRoot.querySelector(".ingresar").parentNode;
                parent.insertBefore(el, this.shadowRoot.querySelector(".ingresar"));
            }
        }

    }

    _removeError = e => {
        const elem = this.shadowRoot.querySelector(".error");
        if (elem) {
            elem.parentNode.removeChild(elem);
        }
    };
}

customElements.define('enter-game', EnterGame);