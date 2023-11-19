import { Component, ReactNode } from 'react';

interface MyProps {
  children?: ReactNode;
}

interface MyState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<MyProps, MyState> {
  state: MyState = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): MyState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Oops... Something is wrong</h1>
          {this.state.error && <p>{this.state.error.message}</p>}
        </>
      );
    }

    return this.props.children;
  }
}
