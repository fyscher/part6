import { useDispatch, useSelector } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { createNotification, clearNotification } from "../reducers/notificationReducer";

const AnecdoteForm = (e) =>
{
    const dispatch = useDispatch()
    const anecdotes = useSelector(({anecdotes})=> anecdotes)
    const addAnecdote = (e) =>
    {
        e.preventDefault()
        
        const content = e.target.anecdote.value

        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(createNotification({content}))
        setTimeout(() => {dispatch(clearNotification())}, 5000)
    }

    return (
        <>
            <h3>Add an Anecdote</h3>
            <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">Add</button>
            </form>
        </>
    )
}

export default AnecdoteForm;