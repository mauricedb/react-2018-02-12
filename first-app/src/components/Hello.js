import React from "react";

// class Hello extends Component {
//   render() {
//     const { name, time } = this.props;

//     return <div xx="1">Hello {name} the time is {time.toLocaleTimeString()}</div>;
//   }
// }

export default ({ name, time }) => (
  <div xx="1" className="hello">
    Hello {name} the time is {time.toLocaleTimeString()}
  </div>
);

// export default Hello;

export const maurice = "Maurice";
