import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import "./ProductCard.css";

export function ProductCard() {
  return (
    <>
      <Header />
      <body>
        <main>
          <section className="cart-1">
            <div className="container-1">
              <div className="t1">
                <h2>Meu Carrinho</h2>
                <div>
                  <p>QUANTIDADE</p>
                  <p>UNITÁRIO</p>
                  <p>TOTAL</p>
                </div>
              </div>

              <div className="cart-items">
                <div className="cart-item">
                  <figure>
                    <img
                      src="../src/image/tenis_revolution.png"
                      alt="Tênis Nike Revolution 6 Next Nature Masculino"
                    />
                  </figure>
                  <div className="cart-item-info">
                    <h3>Tênis Nike Revolution 6 Next Nature Masculino</h3>
                    <p>Cor: Vermelho / Branco</p>
                    <p>Tamanho: 42</p>
                  </div>
                </div>
                <div className="cart-item-actions">
                  <div>
                    <div>
                      {" "}
                      <button className="decrease">-</button>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="quantity"
                      />
                      <button className="increase">+</button>
                    </div>
                    <button className="remove-item">Remover Item</button>
                  </div>
                  <span className="price">R$ 219,00</span>
                  <span className="price">R$ 219,00</span>
                </div>
              </div>

              <div className="desc">
                <div className="coupon">
                  <h4>Cupom de desconto</h4>
                  <div className="inptDF">
                    {" "}
                    <input
                      type="text"
                      placeholder="Insira seu código"
                      className="coupon-code"
                    />
                    <button className="btn">OK</button>
                  </div>
                </div>
                <div className="shipping">
                  <h4>Calcular frete</h4>
                  <div className="inptDF">
                    <input
                      type="text"
                      placeholder="Insira seu CEP"
                      className="shipping-cep"
                    />
                    <button className="btn">OK</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-summary">
              <h3>Resumo</h3>
              <ul>
                <li>
                  Subtotal: <span id="subtotal">R$ 0,00</span>
                </li>
                <li>
                  Frete: <span id="frete">R$ 0,00</span>
                </li>
                <li>
                  Desconto: <span id="desconto">R$ 30,00</span>
                </li>
                <li>
                  Total:{" "}
                  <span id="total" className="blink">
                    R$ 219,00
                  </span>
                </li>
              </ul>

              <button className="btn" id="continue">
                Continuar
              </button>
            </div>
          </section>

          <section className="related-products">
            <div className="container-2">
              <div className="vtodos">
                <h2>Produtos Relacionados</h2>
                <a href="#" className="btn">
                  Ver todos →
                </a>
              </div>

              <div className="products">
                <div className="produto">
                  <div className="imagem-produto">
                    <p className="discount1">30% OFF</p>
                    <img
                      className="img-item"
                      src="../src/image/tenis-catalogo.png"
                      alt=""
                    />
                  </div>
                  <div className="texto-produto">
                    <h4>Tênis</h4>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <p>
                      <span>$200</span>
                      <span className="valor">$100</span>
                    </p>
                  </div>
                </div>
                <div className="produto">
                  <div className="imagem-produto">
                    <p className="discount">30% OFF</p>
                    <img
                      className="img-item"
                      src="../src/image/tenis-catalogo.png"
                      alt=""
                    />
                  </div>
                  <div className="texto-produto">
                    <h4>Tênis</h4>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <p>
                      <span>$200</span>
                      <span className="valor">$100</span>
                    </p>
                  </div>
                </div>
                <div className="produto">
                  <div className="imagem-produto">
                    <p className="discount">30% OFF</p>
                    <img
                      className="img-item"
                      src="../src/image/tenis-catalogo.png"
                      alt=""
                    />
                  </div>
                  <div className="texto-produto">
                    <h4>Tênis</h4>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <p>
                      <span>$200</span>
                      <span className="valor">$100</span>
                    </p>
                  </div>
                </div>
                <div className="produto">
                  <div className="imagem-produto">
                    <p className="discount">30% OFF</p>
                    <img
                      className="img-item"
                      src="../src/image/tenis-catalogo.png"
                      alt=""
                    />
                  </div>
                  <div className="texto-produto">
                    <h4>Tênis</h4>
                    <h3>K-Swiss V8 - Masculino</h3>
                    <p>
                      <span>$200</span>
                      <span className="valor">$100</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </body>
      <Footer />
    </>
  );
}
