import './OfertaEspecial.css'

export function OfertaEspecial() {

    return (
        <>
            <section className='oferta-especial'>

                <div className='oferta-especial1'>
                    <div className="img-oferta-especial">
                        <img src="../src/image/oferta-especial.png" alt="" />
                    </div>
                    <div className="textos-oferta-especial">
                        <p id="subtitulo-oferta-especial">Oferta especial</p>
                        <h2 id="titulo-oferta">Air Jordan edição de colecionador</h2>
                        <p id="texto-oferta">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                        <a className="btn-oferta" href="#">Ver Oferta</a> 
                    </div>
                </div>

            </section>
        </>
    )
}
