// import './HomePage.css'
import { Header } from '../../components/Header/Header'
import UncontrolledExample from '../../components/Carrossel/Carrossel'
import { Section } from '../../components/Section/Section'
import { ProdutosEmAlta } from '../../components/ProdutosEmAlta/ProdutosEmAlta'
import { OfertaEspecial } from '../../components/OfertaEspecial/OfertaEspecial'
import { Footer } from '../../components/Footer/Footer'

export function HomePage() {

    return (
      <>
      <Header/>
      <UncontrolledExample />
      <Section />
      <ProdutosEmAlta />
      <OfertaEspecial />
      <Footer/>
      </>
    )
  }