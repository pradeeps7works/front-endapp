import React, { Component } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

class Loading extends Component {
  render() {
    return (
      <div className="relative min-h-full flex flex-grow justify-start items-stretch bg-gradient-to-b from-profile to-white rounded-tr-[60px] rounded-bl-[60px]">
        <div className="flex flex-col flex-1 min-w-[768px] bg-white text-center justify-center items-center rounded-tr-[60px] rounded-bl-[60px]">
          <AiOutlineLoading3Quarters color="#FF75C8" size={35} />
        </div>
      </div>
    );
  }
}

export default Loading;
