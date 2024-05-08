import { createSlice } from "@reduxjs/toolkit";


const searchSuggestionSlice = createSlice({
    name:"searchSuggestionData",
    initialState:{
        suggestionData:{}
    },
    reducers:{
        setSuggestionData: (state,action)=>{
            state.suggestionData={...state.suggestionData, ...action.payload}
        },
        clearSuggestionData: (state)=>{
            state.suggestionData={}
        }
    }
})

export const {setSuggestionData,clearSuggestionData} = searchSuggestionSlice.actions;
export default searchSuggestionSlice.reducer