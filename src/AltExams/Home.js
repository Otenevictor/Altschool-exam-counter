import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";



function Home() {
  return (
    <>
     <Helmet>
      <title>counter1</title>
      <meta name="discriction" content="home landing page. "/>
      <link rel="canonical" href="/"/>
    </Helmet>
    <section className="navbar">
      <section>
      
        <NavLink  style={({ isActive }) =>
            isActive ? { color: "red" } : { color: "black" }
          } to="/">Home</NavLink>
        <NavLink 
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
    <div className="content">
    <h1>Altschool Second Semester Examination</h1>
    <p>setting up a custom counter hook with increament, 
      decrement, rest, setvalue, using the combination of  
      useState and useReducer, with the various implementation 
      of page for the custom hook as <span>counter1 and counter2</span>, 404 
      implementation, and a page to test error boundary, SEO 
      implemented using Helment installation</p>  
      </div>  
    
    </>
  );
}

export default Home;