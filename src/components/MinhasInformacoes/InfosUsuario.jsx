import './InfosUsuario.css'
import { Link } from "react-router-dom";

export function InfosUsuario() {

    return (
        <>
            <div className='infosPage'>
                <div className='divMyInfos'>
                    <p id='myInfosParagraph'>Minhas Informações</p>
                    <Link to="/EditarInfos" className='editarPerfil'>Editar</Link>
                    
                </div>
                <hr className='linhaInfosH' />

                <div className='divInfos1'>
                    <p className='myInfosP'>Informações Pessoais</p>
                    <p className='infosP'>Nome: </p>
                    <p className='infosP'>CPF: </p>
                    <p className='infosP'>Email: </p>
                    <p className='infosP'>Celular: </p>
                    <hr className='linhaInfosH' />
                </div>

                <div className='divInfos1'>
                    <p className='myInfosP'>Informações de Entrega</p>
                    <p className='infosP'>Endereço: </p>
                    <p className='infosP'>Bairro: </p>
                    <p className='infosP'>Cidade: </p>
                    <p className='infosP'>CEP: </p>
                </div>
            </div>
        </>

    )
}

