import { createSlice } from "@reduxjs/toolkit";

const liveCommentDataSlice = createSlice({
    name: "liveCommentData",
    initialState: {
        liveCommentData: [],
    },
    reducers: {
        setLiveCommentData: (state, action) => {
            if(state.liveCommentData.length > 200){
                state.liveCommentData.shift();
            }
            state.liveCommentData.push(action.payload);
        },
        clearLiveCommentData: (state) => {
            state.liveCommentData = [];
            state.totalResults = 0;
        },
    },
});

export const { setLiveCommentData, clearLiveCommentData } = liveCommentDataSlice.actions;
export default liveCommentDataSlice.reducer;