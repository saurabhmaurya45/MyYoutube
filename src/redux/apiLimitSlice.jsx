import { createSlice } from "@reduxjs/toolkit";

const apiLimitSlice = createSlice({
    name: "apiLimit",
    initialState: {
        apiLimit: false,
        apiLimitMessage: "Api Limit Reached! Please try again tomorrow.",
    },
    reducers: {
        setApiLimit: (state) => {
            state.apiLimit = true;
        },
    },

})

export const { setApiLimit } = apiLimitSlice.actions;
export default apiLimitSlice.reducer;
