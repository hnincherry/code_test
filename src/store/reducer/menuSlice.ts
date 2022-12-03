import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
    name: 'menuData',
    initialState: {
        menu_data: null,
    },
    reducers: {
        setMenuData: (state, action) => {
            state.menu_data = action.payload.data
        }
    }
})

export const { setMenuData } = menuSlice.actions
export default menuSlice.reducer
