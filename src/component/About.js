import { Component } from "react";
import UserCard from "./UserCard";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }
  componentDidMount() {
    // console.log("parent Didmount ");
    
    // this.timer = setInterval(() => {
    //   console.log("Krish");
    // }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("About WillUnmount called");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <UserCard name={"First"} place={"chennai"} />
        <UserCard name={"Second"} place={"Shiva"} />
        <h1>About</h1>
        <h2>This is Namaste React Webseries</h2>
      </div>
    );
  }
}
export default About;
