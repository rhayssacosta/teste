import './Destaque.css';
import CamisaStarWars from "../../image/camisaStar.png";
import TenisDestaque from "../../image/ddd1-tenis.svg";
import Headphones from "../../image/headphone.svg";
import { Link } from "react-router-dom"

export function Destaque() {

  return (
    <>
    <section className="section-destaque">
                <div className="divDestaque">
                    <p className="paragrafoColecao">Coleções em destaque</p>
                    <div className="divDestaque1">
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque">Novo drop<br></br>Supreme</h3>
                                <Link to="/Produtos" className="botaoComprar">Comprar</Link>
                            </div>
                            <img src={CamisaStarWars} alt="" className='imagens-destaque' />
                        </div>
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque">Coleção Adidas</h3>
                                <Link to="/Produtos" className="botaoComprar">Comprar</Link>
                            </div>
                            <img src={TenisDestaque} alt="" className='imagens-destaque'/>
                        </div>
                        <div className="divDestaquePromo1">
                            <div className="textoDestaque">
                                <p className="paragrafoDestaque">30% OFF</p>
                                <h3 className="h3Destaque" id='paragrafoDestaque'>Novo Beats Bass</h3>
                                <Link to="/Produtos" className="botaoComprar">Comprar</Link>
                            </div>
                            <img src={Headphones} alt="" className='imagens-destaque' />
                        </div>
                    </div>

                </div>


            </section>
    </>
)
}