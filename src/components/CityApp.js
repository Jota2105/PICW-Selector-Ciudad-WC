export class CityApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <city-selector></city-selector>
      <city-info></city-info>
    `;
  }

  connectedCallback() {
    const valorCiudad = this.shadowRoot.querySelector('city-info');

    this.shadowRoot.querySelector('city-selector').addEventListener('ciudad-cambio', (ev) => {
      valorCiudad.nombreCiudad = ev.detail.ciudad;
    })
  }
}
customElements.define('city-app', CityApp);
