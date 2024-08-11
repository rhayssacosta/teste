import './CompraRealizada.css'

export function CompraRealizada() {

  return (
    <>
      <section className="section-container">
        <div className='success-page'>

          <div className="success-main">
            <div className="success">
              <img src="src/image/sucesso.png" alt="Ícone de confete" />
              <h2 className="compra-realizada">Compra Realizada com sucesso!</h2>
            </div>

            <div className="order-details">
              <h3>Informações Pessoais</h3>
              <ul>
                <li>Nome: Francisco Antonio Pereira</li>
                <li>CPF: 123485913-35</li>
                <li>Email: francisco@gmail.com</li>
                <li>Celular: (85) 5555-5555</li>
              </ul>
              <h3>Informações de Entrega</h3>
              <ul>
                <li>Endereço: Rua João Pessoa, 333</li>
                <li>Bairro: Centro</li>
                <li>Cidade: Fortaleza, Ceará</li>
                <li>CEP: 433-8800</li>
              </ul>
              <h3>Informações de Pagamento</h3>
              <ul>
                <li>Titular do Cartão: FRANCISCO A P</li>
                <li>Final: **** **** **** 2020</li>
              </ul>
              <h3>Resumo da compra</h3>
            </div>

            <div className="product">
              <img src="tenis.svg" alt="Tênis Nike Revolution 6 Next Nature Masculino" />
              <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
            </div>

            <div className="total">
              <h3>Total</h3>
              <p>R$ 219,00</p>
              <span>ou 10x de R$ 21,00 sem juros</span>
            </div>

            <div className="imprimir-retornar" >
              <button>Imprimir Recibo</button>
            </div>
            </div>

          <button>Voltar para Home</button>
        </div>
      </section>
    </>
  )
}
