import { createSlice } from "@reduxjs/toolkit";

const videoDataSlice = createSlice({
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
            const { items, nextPageToken, prevPageToken, pageInfo } = action.payload;
            state.videoData = [...state.videoData, ...items];
            state.nextPageToken = nextPageToken || "";
            state.previousPageToken = prevPageToken || "";
            state.totalResults = pageInfo ? pageInfo.totalResults : 0;
            state.videoLength = state.videoData.length;
        },
        clearVideoData: (state) => {
            console.log("inside clearvideodata");
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

export const { setVideoData, clearVideoData, popFromStart } = videoDataSlice.actions;
export default videoDataSlice.reducer;