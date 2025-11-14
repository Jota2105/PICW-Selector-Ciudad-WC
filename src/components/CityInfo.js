export class CityInfo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // Falta definir estilos y estructura
    this.shadowRoot.innerHTML = `
      <style>

      </style>
      <div class="container">
        <label>Nombre:</label>
        <span id="nombre">No seleccionado</span>
      </div>
    `;
  }

  // Setter para actualizar el nombre de la ciudad
  set nombreCiudad(value) {
    this.shadowRoot.getElementById('nombre').textContent = value || 'No seleccionado';
  }

}
customElements.define('city-info', CityInfo);
