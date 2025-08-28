import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../../requests'
import { useContext } from 'react'
import NotificationContext from '../../NotificationContext'


const AnecdoteForm = () => {
  
  const queryClient = useQueryClient()
  const [, dispatch] = useContext(NotificationContext)

  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: newAnecdote =>
    {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      dispatch({ type: 'CREATE', content: `Success! Created: ${content}`})
      setTimeout(() => {dispatch({ type: "CLEAR" })}, 5000)
    },
    onError: error =>
    {
      console.log('error: ', error)
      dispatch({ type: 'ERROR', content: `Error! Could not create: ${error.status}: ${error.message}. Must meet 5 character minimum`}) //why does this submit when character min is met?
      setTimeout(() => {dispatch({ type: "CLEAR" })}, 5000)
    }
  })

  const onCreate = (event) =>
  {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    newAnecdoteMutation.mutate({ content, votes: 0})
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
