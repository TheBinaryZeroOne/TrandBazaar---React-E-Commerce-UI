import { configureStore } from "@reduxjs/toolkit"
import mainData from "../features/MainSlice"
import cartData from "../features/Cart"

let store = configureStore({
    reducer: {
        mainData: mainData,
        cart: cartData
    }
})

export default store