import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (e) =>
{
    const dispatch = useDispatch()
    const addAnecdote = (e) =>
    {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(content))
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