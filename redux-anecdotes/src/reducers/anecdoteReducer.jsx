import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers:
  {
    updateAnecdote(state, action)
    {
      const id = action.payload.id
      return state.map(m => m.id !== id ? m : action.payload )
    },
    appendAnecdote(state, action)
    {
      state.push(action.payload)
    },
    setAnecdotes(state, action)
    {
      return action.payload
    }
  }
})

export const { updateAnecdote, appendAnecdote, setAnecdotes  } = anecdoteSlice.actions

export const voteAnecdote = id =>
{
  return async dispatch =>
  {
    const object = await anecdoteService.getById(id)
    const changedVote =
    {
      ...object,
      votes: object.votes + 1
    }
    const newObject = await anecdoteService.update(id, changedVote)
    dispatch(updateAnecdote(newObject))
  }
}

export const initializeAnecdotes = () =>
{
  return async dispatch  =>
  {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content =>
{
  return async dispatch =>
  {
    const newAnecote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecote))
  }
}

export default anecdoteSlice.reducer;
