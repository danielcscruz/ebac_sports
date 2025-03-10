import { useEffect, useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { useDispatch, useSelector } from 'react-redux'
import { setProdutos } from './store/produtosSlice'
import { adicionarAoCarrinho } from './store/carrinhoSlice'
import { favoritar } from './store/favoritosSlice'

import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch()
  const produtos = useSelector((state: any) => state.produtos)
  const carrinho = useSelector((state: any) => state.carrinho)
  const favoritos = useSelector((state: any) => state.favoritos)

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => dispatch(setProdutos(res)))
  }, [dispatch])

  function adicionarAoCarrinhoHandler(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function favoritarHandler(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={carrinho} />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          favoritar={favoritarHandler}
          adicionarAoCarrinho={adicionarAoCarrinhoHandler}
        />
      </div>
    </>
  )
}

export default App
