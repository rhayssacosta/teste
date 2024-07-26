import "./Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className="header-f">
        <section className="header-main">
          <img
            className="logo"
            src="src/image/logo-dc.png"
            alt="Digital Store"
          />
          <div className="search">
            <input
              type="text"
              name=""
              id=""
              placeholder="Pesquisar produto..."
            />
            <img src="src/image/lupa.png" alt=""></img>
          </div>

          <div className="register">
            <Link to='/CriarConta'><a className="cadastrar">Cadastre-se</a></Link>
            <div className="button-container">
              <Link to='/Login'><a>
                <button className="button-login">Entrar</button>
              </a>{" "}</Link>
            </div>
            <img className="cart" src="src/image/carrinho.png" alt="" />
          </div>
          {/* <div className="cart">
            <img src="src/image/carrinho.png" alt="" />
          </div> */}
        </section>
        <nav className="nav">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/Produtos" className="link">
              Produtos
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/" className="link">
              Categorias
            </Link>
            <div></div>
          </li>
          <li>
            <Link to="/Pedidos" className="link">
              Meus pedidos
            </Link>
            <div></div>
          </li>
        </nav>
      </header>
    </>
  );
}
