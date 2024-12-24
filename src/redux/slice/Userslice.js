import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state,action) => {
        state.users.push(action.payload)
    },
    updateUser: (state,action) => {
        state.users[action.payload.index] = action.payload.data
    },
    deleteUser: (state,action) => {
        state.users.splice(action.payload.index,1)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = usersSlice.actions

export default usersSlice.reducer