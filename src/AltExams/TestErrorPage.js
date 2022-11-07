import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink } from 'react-router-dom';

class ErrorTesting extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }

  render() {
    if (this.state.counter === 1) {
      // Simulate a JS error
      throw new Error(
        'I crashed! because something went wrong. this is my error boundary testing page'
      );
    }

    return (
      <>
        <h2>{this.state.counter}</h2>
        <button className="errorBtn" onClick={this.handleClick}>
          Click me
        </button>
      </>
    );
  }
}

// export default ErrorTesting;

function TestErrorPage() {
  return (
    <>
      <section className="navbar">
        <section>
          <Helmet>
            <title>AltschExam</title>
            <meta name="discriction" content="ErrorBoundary" />
            <link rel="canonical" href="/error" />
          </Helmet>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'red' } : { color: 'black' }
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink to="/counter1">Counter1</NavLink>
          <NavLink to="/counter2">Counter2</NavLink>
          <NavLink to="/error">Error</NavLink>
        </section>
      </section>
      <h1>ErrorBoundary Test Page</h1>
      <p>click on the button to throw error</p>
      <ErrorTesting />
    </>
  );
}

export default TestErrorPage;
