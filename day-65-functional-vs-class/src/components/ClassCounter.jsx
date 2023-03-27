import React from "react";

class ClassCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.increase = this.increase.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    console.log("component unmounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`You clicked ${this.state.count} times`);
    }
  }

  render() {
    return (
      <div style={{ margin: "50px" }}>
        <h2>{this.state.count}</h2>
        <button onClick={this.increase}>Add</button>
      </div>
    );
  }
}

export { ClassCounter };
