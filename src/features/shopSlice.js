import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  shop_ar:[
    {name:"Bamba", amount:3, id:1},
    {name:"Milk", amount:2, id:2},
  ]
}

const shopSlice = createSlice({
  name:"shop",
  initialState:initValue,
  reducers:{
    addProduct:(state,action) => {
      state.shop_ar.push(action.payload.item)
    },
    resetProducts:(state,action) => {
      // state.shop_ar = []
      state.shop_ar.splice(0)
    }
  }
})

export const {addProduct,resetProducts} = shopSlice.actions;
export default shopSlice.reducer;