import './AsideInfos.css'
import { Link } from "react-router-dom";
import { InfosUsuario } from './InfosUsuario';

export function AsideInfos() {

    return (
        <>
            <section className='sectionAsideInfo'>
                <div className='asideDivGeral'>

                    <div>
                    <div className='divAside'>
                        <Link to="/Perfil" className='asideLinkInfo'><p className='asideInfoP1'>Meu Perfil</p></Link>
                        <hr className='linhaAside'></hr>
                    </div>

                    <div className='divAside'>
                        <Link to="/Pedidos" className='asideLinkInfo'><p className='asideInfoP'>Meus Pedidos</p></Link>
                        <hr className='linhaAside'></hr>
                    </div>

                    <div className='divAside'>
                        <Link to="/MinhasInformacoes" className='asideLinkInfo'><p className='asideInfoP'>Minhas Informações</p></Link>
                        <hr className='linhaAside'></hr>
                    </div>

                    <div className='divAside'>
                        <Link to="/MetodosDePagamentos" className='asideLinkInfo'><p className='asideInfoP2'>Métodos de Pagamento</p></Link>
                    </div>
                    </div>

                    <InfosUsuario />


                </div>
            </section>
        </>
    )
}
