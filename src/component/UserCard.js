import React from "react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    // console.log(this.props.name + " Child Constructor ");
  }
  componentDidMount() {
    // console.log(this.props.name + " Child DidMount");
  }

  componentDidUpdate(preprops, prevstate) {
    if (this.state.count !== prevstate.count) {
      // this code will execute
      // console.log(prevstate.count);
      // console.log("DID UPDATE CALLED");
      // console.log(preprops);
    }
    // if (this.state.count1 !== prevstate.count1) {
    //   // this code will execute
    // }
  }

  render() {
    // console.log(this.props.name + " Child Render");
    // const { name, place } = this.props;

    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
        <h3>{/* I am {name} coming from {place} */}</h3>
      </div>
    );
  }
}

export default UserCard;
