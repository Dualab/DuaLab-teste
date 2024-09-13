import React from "react";
import "./LEDElement.ts"; // Importa o LED personalizado

function App() {
  return (
    <div className="App">
      <h1>LED Simulation</h1>
      {/* Renderiza o componente LED */}
      <wokwi-led color="red" value={true}></wokwi-led>
    </div>
  );
}

export default App;
