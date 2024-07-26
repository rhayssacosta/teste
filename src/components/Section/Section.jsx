import './Section.css'

export function Section() {

  return (
    <>
      <section className='section-destaque' id='testes'>

        <div className='container-fluid' id='container-cards'>
          <h2 className='titulo-destaques' id='titulo-card-destaque'>Coleções em destaque</h2>

          <div className='cards-destaque'>

            <div className='card-2'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Novo drop<br/>Supreme</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/camisa-destaques.png" alt="" />
            </div>

            <div className='card-2'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Coleção<br/> Adidas</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/tenis-destaques.png" alt="" />
            </div>

            <div className='card-2'>
              <div className='texto-card'>
                <p className='desconto-produto'>30% OFF</p>
                <h3 className='produto-em-oferta'>Novo Beats<br/>Bass</h3>
                <a className='btn-destaque' href="#">Comprar</a>
              </div>
              <img className='img-card' src="../src/image/fone-destaques.png" alt="" />
            </div>

          </div>

        </div>
      </section>

      <section className='section-destaque' id='testes2'>
        <div className='icone-colecao'>
          <h2 className='titulo-destaques'>Coleções em destaque</h2>
          <div className='icones-destaque'>
            <div className='icones-colecao'>
              <div className='img-icone'>
                <img src="../src/image/icone-destaques.png" alt="" />
              </div>
              <p className='texto-icone'>Camisetas</p>
            </div>

            <div className='icones-colecao'>
              <div className='img-icone'>
                <img src="../src/image/icone1-destaques.png" alt="" />
              </div>
              <p className='texto-icone'>Calças</p>
            </div>

            <div className='icones-colecao'>
              <div className='img-icone'>
                <img src="../src/image/icone1-destaques.png" alt="" />
              </div>
              <p className='texto-icone'>Bonés</p>
            </div>

            <div className='icones-colecao'>
              <div className='img-icone'>
                <img src="../src/image/icone2-destaques.png" alt="" />
              </div>
              <p className='texto-icone'>Headphones</p>
            </div>

            <div className='icones-colecao'>
              <div className='img-icone'>
                <img src="../src/image/icone3-destaques.png" alt="" />
              </div>
              <p className='texto-icone'>Tênis</p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
