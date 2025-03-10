// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from './produtosSlice'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritosSlice'

const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

export default store
