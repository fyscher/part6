import { configureStore } from '@reduxjs/toolkit'
import andecdoteReducer from './src/reducers/anecdoteReducer'
import filterReducer from './src/reducers/filterReducer'
import notificationReducer from './src/reducers/notificationReducer'

const store = configureStore({
  reducer:
  {
    anecdotes: andecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

store.subscribe(() => console.log(store.getState()))

export default store;
