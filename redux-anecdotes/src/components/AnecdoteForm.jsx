import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteForm = () =>
{
    const dispatch = useDispatch()
    
    const addAnecdote = async (e) =>
    {
        e.preventDefault()
        
        const content = e.target.anecdote.value

        e.target.anecdote.value = ''

        dispatch(createAnecdote(content))
        dispatch(setNotification(`Success! Added: ${content}`, 5))
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