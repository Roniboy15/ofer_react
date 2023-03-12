import { createSlice } from "@reduxjs/toolkit";

const LOCAL_KEY = "productsList";

const initValue = {
  shop_ar: localStorage[LOCAL_KEY] ? JSON.parse(localStorage[LOCAL_KEY]) : [
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
      saveToLocal(state.shop_ar);
    },
    resetProducts:(state,action) => {
      // state.shop_ar = []
      state.shop_ar.splice(0)
      saveToLocal(state.shop_ar);
    },
    deleteSingle:(state,action) => {
      const delIndex = state.shop_ar.findIndex(item => 
        item.id == action.payload.delId)
      state.shop_ar.splice(delIndex,1);
      saveToLocal(state.shop_ar);
    }
  }
})
// ישמור בלוקאל את המצב הנוכחי של הסטייט
const saveToLocal = (state) => {
  localStorage.setItem(LOCAL_KEY,JSON.stringify(state));
}

export const {addProduct,resetProducts,deleteSingle} = shopSlice.actions;
export default shopSlice.reducer;