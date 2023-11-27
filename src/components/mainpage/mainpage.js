import React, { Component } from "react";
import SuccessPage from "./successPage";
//import GreetPage from "./greetPage";
//import Loading from "./loading";

class Mainpage extends Component {
  render() {
    return (
      <div className="h-screen pt-28 w-full max-h-screen">
        <SuccessPage />
      </div>
    );
  }
}

export default Mainpage;
