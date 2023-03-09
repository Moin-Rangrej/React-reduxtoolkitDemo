import { createSlice,configureStore } from '@reduxjs/toolkit'

// create store
// reducer function
// connect reducer fn with store
// createSlice = more powerfull make diffrenet Slice 
// write Object in this Slice

const initialState = {counter : 0,Showcounter:true}

// const counterReducer = (state = initialState,action) => {
//     // console.log(state.Showcounter);
//         if (action.type === "Increament") {
//             return {
//                 counter : state.counter + 1,
//                 Showcounter : state.Showcounter,
//                 name : "Moin Rangrej",
//                 changecolor
//             }
//         }

//         if (action.type === "Increase") {
//             return{
//                 counter : state.counter + action.payload,
//                 Showcounter : state.Showcounter,
//                 name : "Moin Khan",
//                 changecolor2
//             }
//         }

//         if (action.type === "Decreament") {
//             return {
//                 counter : state.counter - action.payload,
//                 Showcounter : state.Showcounter,
//                 name : "Moin 123"
//             }
//         }

//         if (action.type === "toggle") {
//             return{
//                 Showcounter : !state.Showcounter,
//                 counter : state.counter,
//                 name : "Moin 456"
//             }
//         }

//         return state
//     }
 
const counterSlice =  createSlice({
    name: 'counter', 
    initialState  : initialState,
    reducers:{
        increment(state){
            state.counter++ //immer => 
            //clone state
            // new object return(state)
            // need state, keep
            // who overwrite- replace overwrite
        },
        decrement(state){
            state.counter--
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggle(state){
            state.Showcounter = !state.Showcounter
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer,
    // used multiple reducer with diffrent different name
    // this reducer to make object write multiple slices
    // example reducer:{
    // authentication : authSlice.reducer
    // Profilemanage : profileSlice.reducer }
})

// console.log(counterSlice.actions.decrement());
// named export
export const counterActions = counterSlice.actions;
// console.log(counterActions);


export default store 