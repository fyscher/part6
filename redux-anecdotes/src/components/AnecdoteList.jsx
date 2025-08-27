import { useDispatch, useSelector } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";


const Anecdote = ({ anecdote, handleclick}) =>
{
    return (
    <div>
        <div>{anecdote.content}</div>
        <div>has {anecdote.votes}</div>
        <button onClick={handleclick}>vote</button>
    </div>)
}

const AnecdoteList = () =>
{     
    const anecdotes = useSelector(state => state).sort((a,b) => b.votes - a.votes)
    const dispatch = useDispatch()

    const handleClick = (id) =>
    {
        console.log('vote', id)
        dispatch(voteFor(id))
    }

    return(
        <div>
        {anecdotes.map(anecdote =>
            <Anecdote
                key={anecdote.id}
                anecdote={anecdote}
                handleclick={() => handleClick(anecdote.id)}
            />)}
        </div>
)}



export default AnecdoteList;