import * as React from 'react';

interface HelloProps {
  name: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    const { name } = this.props;

    return <div>Hello {name}</div>;
  }
}

export default Hello;
