export class HelloWorld extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = `<p>Hello, World!</p>`;
  }
}
customElements.define('hello-world', HelloWorld);
