import { configureStore } from "@reduxjs/toolkit";
import sidebarStatusSlice from "./sidebarStatusSlice";
import videoDataSlice from "./videoDataSlice";
import liveCommentDataSlice from "./liveCommentDataSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        sidebar : sidebarStatusSlice,
        videoData : videoDataSlice,
        liveComment : liveCommentDataSlice, 
    }
    
});

export default store;