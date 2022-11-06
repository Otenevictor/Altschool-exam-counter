import { useReducer } from 'react';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

function countReducer(initialState = 0, action) {
  if (action === 'increment') {
    return initialState + 1;
  } else if (action === 'decrement') {
    return initialState - 1;
  } else if (action === 'reset') {
    return (initialState = 0);
  } else {
    return initialState;
  }
}

function Count() {
  const [count, dispatch] = useReducer(countReducer, 50);

  return (
    <div className="App">
      <span className="count">count: {count}</span>
      <div className="card">
        <button onClick={() => dispatch('increment')}>Increment</button>
        <br />
        <br />
        <br />
        <button className="reset" onClick={() => dispatch('reset')}>
          Reset
        </button>
        <br />
        <br />
        <br />
        <button onClick={() => dispatch('decrement')}>Decrement</button>
      </div>
    </div>
  );
}
function Counter2() {
  return (
    <>
      <Helmet>
        <title>counter1</title>
        <meta name="discriction" content="counter1 with useReducer counter. " />
        <link rel="canonical" href="/counter2" />
      </Helmet>
      <section className="navbar">
        <section>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/counter1">Counter1</NavLink>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'red' } : { color: 'black' }
            }
            to="/counter2"
          >
            Counter2
          </NavLink>
          <NavLink to="/TestErrorPage">Error</NavLink>
        </section>
      </section>
      <h1>Using useReducer</h1>
      <Count />
    </>
  );
}

export default Counter2;
