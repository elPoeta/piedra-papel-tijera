class MyError extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML =
            `<style>
            div{
                color: #dd4141;
                padding: 2px;
            }
        </style>
        <div>
            <slot>Error!!...</slot>
        </div>
        `;
    }
}

customElements.define('my-error', MyError);