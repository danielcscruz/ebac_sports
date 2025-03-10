// src/store/produtosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

const produtosSlice = createSlice({
  name: 'produtos',
  initialState: [] as Produto[],
  reducers: {
    setProdutos: (state, action: PayloadAction<Produto[]>) => {
      return action.payload
    }
  }
})

export const { setProdutos } = produtosSlice.actions
export default produtosSlice.reducer
