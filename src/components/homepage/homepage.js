import React, { Component } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Mainpage from "../mainpage/mainpage";

class Homepage extends Component {
  render() {
    return (
      <div className="bg-black h-screen w-screen max-w-[100vw] max-h-screen">
        <Navbar />
        <div className="flex justify-between">
          <Sidebar />
          <Mainpage />
        </div>
      </div>
    );
  }
}

export default Homepage;
