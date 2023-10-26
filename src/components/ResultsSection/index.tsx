import { Component, ReactNode } from 'react';

interface MyProps extends React.HTMLAttributes<HTMLElement> {
  searchName?: string;
}

class ResultSection extends Component<MyProps> {
  render(): ReactNode {
    return (
      <section>
        <h2>{this.props.searchName || 'запрос не введен'}</h2>
      </section>
    );
  }
}

export default ResultSection;
