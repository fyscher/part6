import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification  } from "../reducers/notificationReducer";

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

    const handleClick = (id, content) =>
    {
        console.log('vote', id)

        dispatch(voteAnecdote(id))
        dispatch(setNotification(`Success! You voted: ${content}`, 5))
    }

    return(
        <div>
            {sorted.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleclick={() => handleClick(anecdote.id, anecdote.content)}
                />)}
        </div>
)}

export default AnecdoteList;
