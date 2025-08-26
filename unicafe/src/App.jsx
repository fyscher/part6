const App = ({store}) =>
{
  console.log('store:', store)
  const state = store.getState()

  return (
    <div>
      <button onClick={() => store.dispatch({ type: 'GOOD'})}>Good</button>
      <button onClick={() => store.dispatch({ type: 'OK'})}>Ok</button>
      <button onClick={() => store.dispatch({ type: 'BAD'})}>Bad</button>
      <button onClick={() => store.dispatch({ type: 'ZERO'})}>Clear</button>
      <div>
        good: {state.good}
      </div>
      <div>
        ok: {state.ok}
      </div>
      <div>
        bad: {state.bad}
      </div>
    </div>
  )
}

export default App