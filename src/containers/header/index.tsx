import { Container, SearchBar } from './styles';
import igniteToDoLogo from '../../assets/ignite-to-do-logo.svg';
export function Header() {
  return (
    <Container>
      <img src={igniteToDoLogo} alt="Logomarga do Ignite ToDo" />
      <SearchBar>
        <div className="input-container">
          <input type="text" placeholder="Adicione uma nova tafera" />
        </div>
        <button>Criar</button>
      </SearchBar>
    </Container>
  );
}
