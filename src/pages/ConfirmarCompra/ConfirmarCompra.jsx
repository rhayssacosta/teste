import { Header  } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './ConfirmarCompra.css'

export function ConfirmarCompra() {

  return (
    <>
      <Header></Header>
      <div className="container-confirm-compra">
        <h1 id='h1-finaliz-compra'>Finalizar Compra</h1>

        <div className="dados-confirm-compra">
          <div className="form-compra">

            <section className='formsCompra' id='personal-info'>
              <h2 className='info-conf-pedido'>Informações Pessoais</h2>
              <hr id='linha-resumo' />

              <form className='form-dados'>
                <label className='labels-confirm-compra'>Nome Completo *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira seu nome" />
                <label className='labels-confirm-compra'>CPF *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira seu CPF" />
                <label className='labels-confirm-compra'>E-mail *</label>
                <input className='inputs-confirm-compra' type="email" placeholder="Insira seu email" />
                <label className='labels-confirm-compra'>Celular *</label>
                <input className='inputs-confirm-compra' type="tel" placeholder="Insira seu celular" />
              </form>
            </section>

            <section className="formsCompra" id='dados-entrega'>
              <h2>Informações de Entrega</h2>

              <form className="form-dados-entrega">
                <label className='labels-confirm-compra'>Endereço *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira seu endereço" />
                <label className='labels-confirm-compra'>Bairro *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira seu bairro" />
                <label className='labels-confirm-compra'>Cidade *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira sua cidade" />
                <label className='labels-confirm-compra'>CEP *</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira seu CEP" />
                <label className='labels-confirm-compra'>Complemento</label>
                <input className='inputs-confirm-compra' type="text" placeholder="Insira complemento" />
              </form>
            </section>

            <section className="formsCompra" id='info-pagamento'>
              <h2>Informações de Pagamento</h2>

              <form className="formas-pagamento">

                <label className='labels-confirm-compra'>Forma de Pagamento</label>
                <div className="tipo-pagamento">
                  <input className='inputs-confirm-compra' type="radio" name="f-pagamento" id="cartao-credito" />
                  <label className='labels-confirm-compra'>Cartão de crédito</label>
                  <input className='inputs-confirm-compra' type="radio" name="f-pagamento" id="boleto-bancario" />
                  <label className='labels-confirm-compra'>Boleto bancário</label>
                </div>

                <div className='dados-pagamento'>
                  <label className='labels-confirm-compra'>Nome do Cartão *</label>
                  <input className='inputs-confirm-compra' type="text" placeholder="Insira o nome do Cartão" />
                  <div className='data-cartao'>
                    <div>
                      <label className='labels-confirm-compra'>Data e Número do Cartão *</label>
                      <input className='inputs-confirm-compra' type="text" placeholder="Insira número do Cartão" />
                    </div>
                    <div>
                      <label className='labels-confirm-compra'>Data de validade do Cartão *</label>
                      <input className='inputs-confirm-compra' type="text" placeholder="Insira a validade do Cartão" />
                    </div>
                  </div>
                  <label className='labels-confirm-compra'>CVV *</label>
                  <input className='inputs-confirm-compra' type="text" placeholder="CVV" />

                </div>
              </form>
            </section>

            <div>
              <div className="resumo-pedido">
                <h2 className='titulo-finalizar-compra'>Finalizar Compra</h2>
                <hr id='linha-finali' />
                <div className="total-price">
                  <p>Total:</p>
                  <p>R$ 219,00</p>
                </div>
                <p id='forma-parcelamento'>ou 10x de R$ 21,00 sem juros</p>
                <a className='realizar-pagamento' href="#">Realizar Pagamento</a>
              </div>
            </div>
          </div>

          <div className="resumo-finali-compra">
            <h2 className='tit-resumo'>RESUMO</h2>
            <hr id='linha-resumo' />
            <div className="resumo-do-pedido">
              <img src="../src/image/tenis-mini-resumo.png" alt="Tenis adidas adicionado ao carrinho" />
              <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>
            <hr id='linha-resumo' />

            <div className='resumos-do-pedido'>
              <div className='resumos-do-pedido1'>
                <p>Subtotal:</p>
                <p>219,00</p>
              </div>

              <div className='resumos-do-pedido1'>
                <p>Frete:</p>
                <p>0,00</p>
              </div>

              <div className='resumos-do-pedido1'>
                <p>Desconto:</p>
                <p>20,00</p>
              </div>
            </div>

            <div className='resumo-valor-compra'>
              <div className="total-compra">
                <p>Total:</p>
                <p>R$ 219,00</p>
              </div>
              <p id='condicao-pagamento'>ou 10x de R$ 21,00 sem juros</p>
            </div>
            <a className='finalizar-compra' href="#">Realizar Pagamento</a>
          </div>

        </div>






      </div>
      <Footer></Footer>


    </>
  )
}

