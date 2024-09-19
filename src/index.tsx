import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Agora importamos o componente React, não a classe

// Função para criar e montar o App
function mountApp() {
  // Cria um novo elemento div
  const appContainer = document.createElement('div');
  appContainer.id = 'root';

  // Adiciona o novo elemento ao body
  document.body.appendChild(appContainer);

  // Renderiza o componente App no container
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    appContainer
  );
}

// Espera que o DOM esteja completamente carregado antes de montar o App
document.addEventListener('DOMContentLoaded', mountApp);