import * as React from "react";
// useErrorHandler
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <>
        <br/><br/><br/>
        <div className="center"> <a className="switchs" href="/">Refresh page</a>
          <h1>Something went wrong.</h1>;
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
          </div>
        </>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
