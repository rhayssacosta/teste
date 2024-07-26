import "./CriarConta.css";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";


export function CriarConta() {
  return (
    <>
      <header>
       <Link to='/'><img className="lg-lg" src="src/image/logo-dc.png" alt="" /></Link>
      </header>
      <main>
        <div id="boxLogin">
          <div className="form-login">
            <h2>Crie sua conta</h2>
            <p>
              Já possui uma conta? Entre <Link to='/Login'><a href="#">aqui</a></Link>.
            </p>
            <form>
              <div>
                <label htmlFor="login">Email *</label>
                <input type="text" id="login" placeholder="Insira seu login ou email" className="input" required/>
              </div>
              <p>
                <a href="#">Esqueci minha senha</a>
              </p>
              <Link to='/FormCriarConta'><button type="submit"> Criar Conta</button></Link>
            </form>
            <div className="lgn-icons">
              <p>Ou faça login com</p>
              <img src="src/image/gmail-login.png" alt="" />
              <img src="src/image/facebook-login.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tenis">
          <img src="src/image/tenis-login.png" alt="" />
        </div>
        
      </main>
      <Footer></Footer>
    </>
  );
}