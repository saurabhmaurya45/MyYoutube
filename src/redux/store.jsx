import { configureStore } from "@reduxjs/toolkit";
import sidebarStatusSlice from "./sidebarStatusSlice";
import videoDataSlice from "./videoDataSlice";
import liveCommentDataSlice from "./liveCommentDataSlice";
import searchDataSlice from './searchDataSlice';
import apiLimitSlice from './apiLimitSlice';
import searchSuggestionSlice from "./searchSuggestionSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        sidebar : sidebarStatusSlice,
        videoData : videoDataSlice,
        liveComment : liveCommentDataSlice,
        searchData : searchDataSlice,
        apiLimitExceed: apiLimitSlice,
        searchSuggestion: searchSuggestionSlice
    }
    
});

export default store;