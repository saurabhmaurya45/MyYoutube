import { createSlice } from "@reduxjs/toolkit"

const sidebarStatusSlice = createSlice({
    name: 'sidebarStatus',
    initialState: {
        value: 1,
        previousState : 1
    },
    reducers: {
        toggleSidebar: state => {
            state.value = state.value===1 ? 2:1
            state.previousState = state.value
        },
        hideSideBar: state => {
            // state.previousState = state.value
            state.value = 3
        },
        resetSideBar : state =>{
            state.value = state.previousState
        }
    }
})

export const { toggleSidebar,hideSideBar,resetSideBar } = sidebarStatusSlice.actions
export default sidebarStatusSlice.reducer