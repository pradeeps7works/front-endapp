import React, { Component } from "react";
import wave from "../../assets/wave.png";

class GreetPage extends Component {
  render() {
    return (
      <div className="relative min-h-full flex flex-grow justify-start items-stretch bg-gradient-to-b from-profile to-white rounded-tr-[60px] rounded-bl-[60px]">
        <div className="flex flex-col flex-1 min-w-[768px] bg-white text-center justify-center items-center rounded-tr-[60px] rounded-bl-[60px]">
          <div className="bg-lightGold rounded-full flex items-center justify-center p-8">
            <img src={wave} alt="wave" className="mr-2 w-[65px]" />
          </div>
          <h1 className="font-ibm font-bold text-[32px] py-3">Hi Paul!</h1>
          <p className="font-ibm font-normal italic">
            Click on one or many of your data files to begin seeing
            recommendations.
          </p>
        </div>
      </div>
    );
  }
}

export default GreetPage;
