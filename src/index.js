import { App } from "./App.js"; // Certifique-se de que o caminho está correto

// Função para criar e montar o App
function mountApp() {
  // Cria um novo elemento div
  const appContainer = document.createElement("div");

  // Adiciona o novo elemento ao body
  document.body.appendChild(appContainer);

  // Cria uma nova instância do App e a renderiza no container
  const app = new App();
  appContainer.appendChild(app.render());
}

// Espera que o DOM esteja completamente carregado antes de montar o App
document.addEventListener("DOMContentLoaded", mountApp);
