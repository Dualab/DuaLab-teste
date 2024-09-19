import React, { useState } from "react";
import Draggable from "react-draggable";
import "@wokwi/elements";
import "./LEDElement.js";

function SimulationComponent({ type, value, brightness, color, onClick }) {
  return (
    <div className={`component ${type}`}>
      {type === "led" && (
        <wokwi-led
          value="true"
          color="red"
          brightness="1"
          label="LED"
        ></wokwi-led>
      )}
      {type === "resistor" && (
        <wokwi-resistor value="220" unit="Ω"></wokwi-resistor>
      )}
    </div>
  );
}

export default function App() {
  const [components, setComponents] = useState([
    {
      id: 1,
      type: "led",
      position: { x: 50, y: 50 },
      value: false,
      brightness: 1.0,
      color: "red",
    },
    { id: 2, type: "resistor", position: { x: 150, y: 150 } },
  ]);

  const handleDrag = (id, e, ui) => {
    const newComponents = components.map((component) => {
      if (component.id === id) {
        return {
          ...component,
          position: {
            x: component.position.x + ui.deltaX,
            y: component.position.y + ui.deltaY,
          },
        };
      }
      return component;
    });
    setComponents(newComponents);
  };

  const toggleLed = (id) => {
    const newComponents = components.map((component) => {
      if (component.id === id && component.type === "led") {
        return {
          ...component,
          value: !component.value,
        };
      }
      return component;
    });
    setComponents(newComponents);
  };

  return (
    <div className="App">
      <h1>Área de Simulação</h1>
      <div className="simulation-area">
        {components.map((component) => (
          <Draggable
            key={component.id}
            position={component.position}
            onDrag={(e, ui) => handleDrag(component.id, e, ui)}
          >
            <div onClick={() => toggleLed(component.id)}>
              <SimulationComponent
                type={component.type}
                value={component.value}
                brightness={component.brightness}
                color={component.color}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
}
