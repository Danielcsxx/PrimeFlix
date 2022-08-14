import { Link } from 'react-router-dom';
import './erro.css';

function Erro() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Ops! Página não encontrada... :/</h2>
            <Link to="/">Acessar todos os filmes :D</Link>
        </div>
    );
}

export default Erro;