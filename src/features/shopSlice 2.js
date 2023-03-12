import { createSlice } from "@reduxjs/toolkit";

const initValue = {
    shop_ar: [
        { name: "Bamba", amount: 3, id: 1 },
        { name: "Milk", amount: 2, id: 2 },
    ]
}

const shopSlice = createSlice({
    name: "shop",
    initialState: initValue,
    reducers: {
        addProduct: (state, action) => {
            state.shop_ar.push(action.payload.item)
        },
        resetProducts: (state, action) => {
            // state.shop_ar = []
            state.shop_ar.splice(0)
        },
        deleteSingle: (state, action) => {
            const delIndex = state.shop_ar.findIndex(item =>
                item.id == action.payload.delId)
            state.shop_ar.splice(delIndex, 1);
        }
    }
})

export const { addProduct, resetProducts , deleteSingle} = shopSlice.actions;
export default shopSlice.reducer;