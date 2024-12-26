import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sagaOnlineUsers: [],
  loading:false,
  error:null
}

export const usersSagaSlice = createSlice({
  name: 'userSaga',
  initialState,
  reducers: {
    fetchUsers: (state) => {
        state.loading = true
    },
    fetchedUsersSuccessfully: (state,action) => {
        console.log("saga users data",action.payload)
        state.sagaOnlineUsers = action.payload
        state.loading = false

    },
    fetchUsersFailed: (state,action) => {
        console.log("error",action.payload)
        state.loading = false
        state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchUsers, fetchedUsersSuccessfully, fetchUsersFailed } = usersSagaSlice.actions

export default usersSagaSlice.reducer