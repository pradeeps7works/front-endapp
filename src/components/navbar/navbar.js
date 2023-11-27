import React, { Component } from "react";
import logo from "../../assets/logo.png";
import profileLogo from "../../assets/profile.png";

class Navbar extends Component {
  render() {
    return (
      <div className="absolute top-0 rounded-b-[60px] z-10 flex justify-between items-center bg-black m-0 p-4 rounded-bl-[40px] w-screen">
        <img src={logo} alt="logo" className="h-[52px] w-[327px]" />

        <div className="bg-profile pr-4 flex justify-between items-center rounded-full border-2 border-lightGray max-h-[80px]">
          <div className="">
            <img src={profileLogo} alt="profile logo" className="" />
          </div>
          <div className="flex-col  items-center">
            <p className="text-white text-[24px] font-nunito font-bold">
              Paul Smith
            </p>
            <p className="text-[16px] font-nunito font-normal text-white">
              School Leader
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
