import { Routes, Route } from 'react-router-dom'
import './App.css'
// importação das paginas
import { HomePage } from './pages/HomePage/HomePage'
import { FormCriarConta } from './pages/FormCriarConta/FormCriarConta'
import { CriarConta } from './pages/CriarConta/CriarConta'
import { Login } from './pages/Login/Login'
import { ProductListing } from './pages/ProductListing/ProductListing'
import { MeusPedidos } from './pages/MeusPedidos/MeusPedidos'
import {ProductDetails} from './pages/ProductDetails/ProductDetails'
import { ConfirmarCompra } from './pages/ConfirmarCompra/ConfirmarCompra'

export function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/CriarConta' element={<CriarConta />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FormCriarConta' element={<FormCriarConta />} />
        <Route path='/Produtos' element={<ProductListing />} />
        <Route path='/Pedidos' element={<MeusPedidos />} />
        <Route path='/ProductDetails' element={<ProductDetails />} />
        <Route path='/ConfirmarCompra' element={<ConfirmarCompra />} />
        


      </Routes>
    </>
  )
}
