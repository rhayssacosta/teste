import { Link } from 'react-router-dom'
import './ProdutosEmAlta.css'

export function ProdutosEmAlta() {

  return (
    <>
    <section className='produtos-em-alta'>
      <div className='titulo-em-alta'>
        <h2 className='titulo-em-alta' id='titulo-prod-em-alta'>Produtos em alta</h2>
        <Link to="/Produtos" className='titulo-em-alta' id='ver-mais-produtos'>Ver todos →</Link>
      </div>
      <div className='container-fluid' id='itens-1'>

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

        <div className='produto-2'>
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

      </div>
      </section>
    </>
  )
}
