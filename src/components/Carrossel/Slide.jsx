import './Slide.css'
import Ornament from "../../image/Ornament11.svg"
import TenisNike from "../../image/White-Sneakers.svg"
import Fire from "../../image/fire.png"
import { Link } from 'react-router-dom';

function Slides() {

    return (
        <>
            <section className="section-carrossel">
                <div className="divCarrosselGeral">

                    <div className="ofertasTexto">
                        <p className="paragrafoMOferta">Melhores ofertas personalizadas</p>
                        <h1 id="h1QueimaEstoque">Queima de<br />estoque Nike <img className='fire-carrossel'src={Fire} alt="Emoji de fogo."/></h1>
                        <p className="paragrafoDescricaoOferta">Consequat culpa exercitation mollit nisi excepteur do<br />do tempor laboris eiusmod irure consectetur.</p>
                        <Link to="/Produtos"><button className="botaoVendoOfertas">Ver Ofertas</button></Link>
                    </div>

                    <div className="divCarrosselImagens">
                        <div className="divImagensOferta">
                            <img id="imagemOrnament" src={Ornament} alt="" />
                        </div>
                        <img id="ofertaNikeTenis" src={TenisNike} alt="" />
                    </div>
                </div>
            </section>

        </>

    );
}

export default Slides;