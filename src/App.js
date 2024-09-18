import "./LEDElement.js"; // Importa o LED personalizado (agora como um módulo JS)

class App {
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "App";
    this.render();
  }

  render() {
    this.element.innerHTML = `
      <h1>Simulação com LED</h1>
      <wokwi-led color="red"></wokwi-led>
    `;
    return this.element;
  }
}

export default App;
