import { Component, ReactNode } from 'react';
import './index.scss';

interface MyState {
  error: boolean;
}

export class ErrorButton extends Component<unknown, MyState> {
  state: MyState = {
    error: false,
  };

  onClick = () => {
    this.setState({ error: true });
  };

  render(): ReactNode {
    if (this.state.error)
      throw new Error('Sorry, but you broke the app yourself');
    return (
      <button type="button" className="error-button" onClick={this.onClick}>
        break app
      </button>
    );
  }
}
