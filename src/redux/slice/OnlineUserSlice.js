import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    onlineUsers: [],
    loading: false,
    error: null

}
//redux toolkit using redux-thunk as middleware
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const response = await res.json()
            return response
        }
        catch (err) {
            console.log("fetch user failed", err)
        }


    }
)

export const onlineUserSlice = createSlice({
    name: 'onlineUser',
    initialState,
    reducers: {

    },
    extraReducers: builder => { //redux thunk
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
                state.error = null

            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false
                state.onlineUsers = action.payload

            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload

            })

    }
})



export default onlineUserSlice.reducer