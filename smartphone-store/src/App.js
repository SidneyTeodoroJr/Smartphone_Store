// Importa o arquivo 'App.css', que contém estilos específicos para o componente App.
import './App.css';
// Importa o componente 'Content' do arquivo 'Conect.js'.
import { Content } from './Conect';
// Definição do componente 'App', que é o componente principal da aplicação.
function App() {
  // Retorna o JSX (JavaScript XML) que representa a estrutura do componente 'App'.
  return (
    <div className="App">
      <Content />
    </div>
  );
}
// Exporta o componente 'App', para que possa ser utilizado em outros locais da aplicação.
export default App;