import { useDispatch, useSelector } from "react-redux";
import { voteFor } from "../reducers/anecdoteReducer";
import { voteNotification, clearNotification } from "../reducers/notificationReducer";

const Anecdote = ({ anecdote, handleclick}) =>
{
    return (
        <div>
            <div>{anecdote.content}</div>
            <div>has {anecdote.votes}</div>
            <button onClick={handleclick}>vote</button>
        </div>
    )
}

const AnecdoteList = () =>
{     
    const anecdotes = useSelector(({ anecdotes, filter }) =>
    {
        return filter
        ? anecdotes.filter( a => a.content.toLowerCase().match(filter))
        : anecdotes
    })
    
    const sorted = [...anecdotes].sort((a,b) => b.votes - a.votes)

    const dispatch = useDispatch()

    const handleClick = (id) =>
    {
        console.log('vote', id)

        dispatch(voteFor(id))
        dispatch(voteNotification({ anecdotes, id }))
        setTimeout(() => {dispatch(clearNotification())}, 5000)
    }

    return(
        <div>
            {sorted.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleclick={() => handleClick(anecdote.id)}
                />)}
        </div>
)}

export default AnecdoteList;
