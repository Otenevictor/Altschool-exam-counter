import React from 'react';
import { NavLink } from 'react-router-dom';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: 'red' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function Bomb({ username }) {
  if (username === 'bomb') {
    throw new Error('💥 CABOOM 💥');
  }
  return `Hi ${username}`;
}

function ErrorBoundary() {
  const [username, setUsername] = React.useState('');
  const usernameRef = React.useRef(null);

  return (
    <div>
      <label>
        {`Username (don't type "bomb"): `}
        <input
          placeholder={`type "bomb"`}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          ref={usernameRef}
        />
      </label>
      <div>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => {
            setUsername('');
            usernameRef.current.focus();
          }}
          resetKeys={[username]}
        >
          <Bomb username={username} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

function TestErrorPage() {
  return (
    <>
      <section className="white">
        <section>
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
          <NavLink to="/ErrorBoundary">ErrorBoundary</NavLink>
        </section>
      </section>
      <h1>Home page</h1>
      <p>i am in the first page</p>
      <ErrorBoundary />
    </>
  );
}

export default TestErrorPage;
