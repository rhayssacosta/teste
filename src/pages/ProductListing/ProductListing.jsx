import { Link } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import './ProductListing.css'

export function ProductListing() {

  return (
    <>
      <Header></Header>
      <section className='section'>
        <div className='container' id='resultados'>
          <h2 className='h2'>Resultados para "Tênis" <span id='quant-produtos'>- 389 produtos</span></h2>
          <div className="btn-group">
            <button id='ordenar-por' type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Ordenar por: <span id='ordenar'>mais relevantes</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <button className="dropdown-item" type="button">menos relevantes</button>
              </li>
              <li>
                <button className="dropdown-item" type="button">mais vendidos</button>
              </li>
              <li>
                <button className="dropdown-item" type="button">menor preço</button>
              </li>
            </ul>
          </div>
        </div>

        <div className='container' id='container'>

          {/* Filtrar */}
          <div id='filters'>
            <h3 className='titulo-item'>Filtrar por</h3>
            <hr />
            <div>
              <p className='titulo-item'>Marka</p>
              <ul>
                <li>
                  <input type="checkbox" name="marca" id="adidas" />
                  <label htmlFor="adidas">Adiddas</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="calenciaga" />
                  <label htmlFor="calenciaga">Calenciaga</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="k-swiss" />
                  <label htmlFor="k-swiss">K-Swiss</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="nike" />
                  <label htmlFor="nike">Nike</label>
                </li>
                <li>
                  <input type="checkbox" name="marca" id="puma" />
                  <label htmlFor="puma">Puma</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Categoria</p>
              <ul>
                <li>
                  <input type="checkbox" name="categoria" id="esporte-e-lazer" />
                  <label htmlFor="esporte-e-lazer">Esporte e lazer</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="casual" />
                  <label htmlFor="casual">Casual</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="utilitario" />
                  <label htmlFor="utilitario">Utilitário</label>
                </li>
                <li>
                  <input type="checkbox" name="categoria" id="corrida" />
                  <label htmlFor="corrida">Corrida</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Gênero</p>
              <ul>
                <li>
                  <input type="checkbox" name="genero" id="masculino" />
                  <label htmlFor="masculino">Masculino</label>
                </li>
                <li>
                  <input type="checkbox" name="genero" id="feminino" />
                  <label htmlFor="feminino">Feminino</label>
                </li>
                <li>
                  <input type="checkbox" name="genero" id="unisex" />
                  <label htmlFor="unisex">Unisex</label>
                </li>
              </ul>
            </div>
            <div>
              <p className='titulo-item'>Estado</p>
              <ul>
                <li>
                  <input type="radio" name="estado" id="novo" />
                  <label htmlFor="novo">Novo</label>
                </li>
                <li>
                  <input type="radio" name="estado" id="usado" />
                  <label htmlFor="novo">Usado</label>
                </li>
              </ul>
            </div>

          </div>

          {/* Lista de Produtos */}
          <div className='container' id='itens'>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'>
              <div className='produto'>
                <div className='imagem-produto'>
                  <p className='discount1'>30% OFF</p>
                  <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
                </div>
                <div className='texto-produto'>
                  <h4>Tênis</h4>
                  <h3>K-Swiss V8 - Masculino</h3>
                  <p>
                    <span>$200</span>
                    <span className='valor'>$100</span>
                  </p>
                </div>
              </div>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount1'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'>
              <div className='produto'>
                <div className='imagem-produto'>
                  <p className='discount'>30% OFF</p>
                  <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
                </div>
                <div className='texto-produto'>
                  <h4>Tênis</h4>
                  <h3>K-Swiss V8 - Masculino</h3>
                  <p>
                    <span>$200</span>
                    <span className='valor'>$100</span>
                  </p>
                </div>
              </div>
            </Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>



            <Link style={{ textDecoration: 'none', color: 'black' }} to='/ProductDetails'><div className='produto'>
              <div className='imagem-produto'>
                <p className='discount'>30% OFF</p>
                <img className='img-item' src="../src/image/tenis-catalogo.png" alt="" />
              </div>
              <div className='texto-produto'>
                <h4>Tênis</h4>
                <h3>K-Swiss V8 - Masculino</h3>
                <p>
                  <span>$200</span>
                  <span className='valor'>$100</span>
                </p>
              </div>
            </div></Link>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}