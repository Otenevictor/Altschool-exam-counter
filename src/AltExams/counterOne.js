import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

const useCounter = initialCount => {
  const [count, setCount] = useState(initialCount);

  return {
    value: count,
    increase: () => setCount(prevCount => prevCount + 1),
    decrease: () => setCount(prevCount => prevCount - 1),
    reset: () => setCount(initialCount)
  };
};

function Counter({ initialCount }) {
  const counter = useCounter(initialCount);
  // const inputRef = useRef(null);

  // const [updated, setUpdated] = useState('');

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   // 👇 "inputRef.current.value" is input value
  //   setUpdated(e.target.value);
  // };


  return (
    <>
     
     <span className="count">count:{counter.value}</span>
      <br />
      <br />
    
      <button onClick={counter.increase}>increament</button><br/><br/><br/>
      <button className="reset" onClick={counter.reset}>Reset</button><br/><br/><br/>
      <button onClick={counter.decrease}>Decreament</button>
    </>
  );
}

function Counter1() {
  return (
    <>
    <Helmet>
      <title>counter1</title>
      <meta name="discriction" content="counter1 with custom hook counter. "/>
      <link rel="canonical" href="/counter1"/>
    </Helmet>
    <section className="navbar">
      <section>
        <NavLink to="/">Home</NavLink>
        <NavLink style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          }
          to="/counter1"
        >
          Counter1
        </NavLink>
        <NavLink 
          to="/counter2"
        >
            Counter2
        </NavLink>
        <NavLink to="/error">Error</NavLink>

        </section>
        
    </section>
    <h1>Custom Counter Hook</h1>
    
      <Counter initialCount={0} /><br/><br/>
      <div className="switch">
      <NavLink 
          to="/counter2"
        >
          Counter2
        </NavLink>
        </div>
    
    </>
  );
}

export default Counter1;