import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers:
    {
        createNotification(state, action)
        {
            const content = action.payload.content
            
            return `Successfully added: ${content}`
        },
        voteNotification(state, action)
        {
            const id = action.payload.id
            state = action.payload.anecdotes
            const notify = state.find(a => a.id === id)

            return `Voted for: ${notify.content}`
        },
        clearNotification(state, action)
        {
            return null
        }
    }
})

export const { createNotification, voteNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer;
