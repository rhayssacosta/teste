import {Link} from 'react-router-dom'
import "../FormCriarConta/FormCriarConta.css";
import { Footer } from "../../components/Footer/Footer";

export function FormCriarConta() {
  return (
    <>
      <header>
       <Link to='/'><img className='lg-lg' src="src/image/logo-dc.png" alt="" /></Link>
      </header>
      <main className="main">
        <div className="boxLogin t">
          <h2>Criar Conta</h2>
          <div className="form-login">
            <p>Informações pessoais</p>
            <form>
              <div>
                <label htmlFor="login">Nome completo *</label>
                <input
                  type="text"
                  id="login"
                  placeholder="Insira seu login ou email"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="CPF">CPF *</label>
                <input
                  type="text"
                  id="CPF"
                  placeholder="Insira seu CPF"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="E-mail">E-mail *</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Insira seu E-mail"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="celular">Celular *</label>
                <input
                  type="text"
                  id="celular"
                  placeholder="Insira seu celular"
                  className="input"
                  required
                />
              </div>
            </form>
          </div>
        </div>
        <div className="boxLogin">
          <div className="form-login">
            <p>Informações de Entrega</p>
            <form>
              <div>
                <label htmlFor="endereço">Endereço *</label>
                <input
                  type="text"
                  id="endereço"
                  placeholder="Insira seu endereço"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="Bairro">Bairro *</label>
                <input
                  type="text"
                  id="Bairro"
                  placeholder="Insira seu bairro"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="Cidade">Cidade *</label>
                <input
                  type="text"
                  id="Cidade"
                  placeholder="Insira sua cidade"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="CEP">CEP *</label>
                <input
                  type="text"
                  id="CEP"
                  placeholder="Insira seu CEP"
                  className="input"
                  required
                />
              </div>
              <div>
                <label htmlFor="complemento">Complemento *</label>
                <input
                  type="text"
                  id="complemento"
                  placeholder="Insira complemento"
                  className="input"
                  required
                />
              </div>
            </form>
          </div>
          <div className="check">
            <input type="checkbox" id="ofertas" />
            <p>
              Quero receber por email ofertas e novidades das lojas da Digital
              Store. A frequência de envios pode variar de acordo com a
              interação do cliente.
            </p>
          </div>

          <button className="button"type="submit">Criar Conta</button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
