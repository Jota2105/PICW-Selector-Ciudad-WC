export class CitySelector extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .container {
          font-family: Arial, sans-serif;
          margin: 10px;
          border-radius: 5px;
          padding: 10px;
        }
      </style>
      <div class="container">
        <label>Escoge una ciudad:</label>
        <select id="city">
          <option value="">--Selecciona--</option>
          <option value="guayaquil">Guayaquil</option>
          <option value="quito">Quito</option>
          <option value="cuenca">Cuenca</option>
        </select>
      </div>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('#city').addEventListener('change', (ev) => {
      this.dispatchEvent(new CustomEvent("ciudad-cambio", {
        detail: { ciudad: ev.target.value },
        bubbles: true,
        composed: true,
      }))
    });
  }
}
customElements.define('city-selector', CitySelector);
