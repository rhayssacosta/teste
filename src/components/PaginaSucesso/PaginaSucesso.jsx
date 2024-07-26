import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import './PaginaSucesso.css'

export function PaginaSucesso() {

    return (
      <>
      <Header/>
    <div class="container">
      <div class="success">
        <img src="src/image/sucesso.png" alt="Ícone de confete"/>
        <h2>Compra Realizada com sucesso!</h2>
      </div>
      <div class="order-details">
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
        <div class="product">
          <img src="tenis.svg" alt="Tênis Nike Revolution 6 Next Nature Masculino"/>
          <p>Tênis Nike Revolution 6 Next Nature Masculino</p>
        </div>
        <div class="total">
          <h3>Total</h3>
          <p>R$ 219,00</p>
          <span>ou 10x de R$ 21,00 sem juros</span>
        </div>
        <button>Imprimir Recibo</button>
        <button>Voltar para Home</button>
      </div>
    </div>
    <Footer/>
      </>
    )
  }
