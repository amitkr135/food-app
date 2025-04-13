import { createSlice } from "@reduxjs/toolkit";
const initState={cards:[]}
const cartSlice = createSlice({
    name:'cart',
    initialState:initState,
    reducers:{
        AddItem:(state,action)=>{
            let data=[...state.cards,action.payload]
            console.log(data);
            state.cards=data
        },
        RemoveItem:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload) 
        }
    }
})

export const {AddItem,RemoveItem}= cartSlice.actions
export default cartSlice.reducer