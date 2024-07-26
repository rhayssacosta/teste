import {Header} from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import {Footer} from '../../components/Footer/Footer'
import './ProductDetails.css'

export function ProductDetails(){


return (
  <>
  <Header/>
  <div className="container-5">
    <div className="content">
      <div className="product">
        <img src='../src/image/air-force-detail.png'/>
          <div className="details">
            <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>
            <p>Casual | Nike | REF: 38416711</p>
            <div className="rating">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <span>(90 avaliações)</span>
            </div>
            <div className="price">
              R$ 219,00
              <span className="old">R$ 210,00</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <p>Tamanhos</p>
            <div className="size">
              <div className="option" data-size="39">39</div>
              <div className="option" data-size="40">40</div>
              <div className="option selected" data-size="41">41</div>
              <div className="option" data-size="42">42</div>
              <div className="option" data-size="43">43</div>
            </div>
            <div>
              <p>Cores</p>
            </div>
            <div className='qualquer'>
              <div className='color_unid' id= 'ciano'></div>
              <div className='color_unid' id= 'rosa'></div>
              <div className='color_unid' id='preto' ></div>
              <div className='color_unid'id='roxo'></div>
            </div>
            <Link to='/ConfirmarCompra'><button className="button">COMPRAR</button></Link>
          </div>

      </div>
      {/* ADD CARROSSEL */}
    </div>
  </div>
  <Footer/>
  </>
  )
}