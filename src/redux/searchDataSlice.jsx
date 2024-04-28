import { createSlice } from "@reduxjs/toolkit";

const searchDataSlice = createSlice({
    name: "videoData",
    initialState: {
        videoData: [],
        nextPageToken: "",
        previousPageToken: "",
        totalResults: 0,
        videoLength: 0
    },
    reducers: {
        setVideoData: (state, action) => {
            const { items, nextPageToken, prevPageToken, pageInfo } = action.payload?action.payload:{items:[],nextPageToken:"",prevPageToken:"",totalResults:0,videoLength:0};
            state.videoData = [...state.videoData, ...items];
            state.nextPageToken = nextPageToken || "";
            state.previousPageToken = prevPageToken || "";
            state.totalResults = pageInfo ? pageInfo.totalResults : 0;
            state.videoLength = state.videoData.length;
        },
        clearVideoData: (state) => {
            state.videoData = [];
            state.nextPageToken = "";
            state.previousPageToken = "";
            state.totalResults = 0;
        },
        popFromStart: (state) => {
            if (state.videoData.length > 200) {
                state.videoData = state.videoData.slice(30);
            }
        },
    },
});

export const { setVideoData, clearVideoData, popFromStart } = searchDataSlice.actions;
export default searchDataSlice.reducer;