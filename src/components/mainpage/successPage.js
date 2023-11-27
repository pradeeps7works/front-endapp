import React, { Component } from "react";
import PromptCard from "../promptcard/promptcard";
import wave from "../../assets/wave.png";
import historyicon from "../../assets/history_icon.svg";
import RecsCard from "./recsCard";
import { CiSearch } from "react-icons/ci";
import { getAiResponse } from "../../apis/prompts/getAiResponse";
import { FaMicrophone } from "react-icons/fa";
import "./success.css";

let recsList = [
  {
    id: 1,
    desc: "This assessment data is showing that students that fall in the lowest quintile are struggling most on numbers and operations.",
    pointers: [
      "It may be helpful to share your core curriculum with me this week so I can let you know in what lesson this theme is coming up most for teachers to reiterate.",
      "I suggest grouping the following kids for further intervention because they are at most risk.",
      "It may be helpful to share your core curriculum with me this week so I can let you know in what lesson this theme is coming up most for teachers to reiterate.",
    ],
  },
  {
    id: 2,
    desc: "This assessment data is showing that students that fall in the lowest quintile are struggling most on numbers and operations.",
    pointers: [
      "It may be helpful to share your core curriculum with me this week so I can let you know in what lesson this theme is coming up most for teachers to reiterate.",
      "I suggest grouping the following kids for further intervention because they are at most risk.",
    ],
  },
  {
    id: 3,
    desc: "This assessment data is showing that students that fall in the lowest quintile are struggling most on numbers and operations.",
    pointers: [
      "It may be helpful to share your core curriculum with me this week so I can let you know in what lesson this theme is coming up most for teachers to reiterate.",
      "I suggest grouping the following kids for further intervention because they are at most risk.",
      "It may be helpful to share your core curriculum with me this week so I can let you know in what lesson this theme is coming up most for teachers to reiterate.",
    ],
  },
];

class SuccessPage extends Component {
  render() {
    return (
      <div className="relative max-w-full max-h-full flex flex-grow justify-start items-stretch bg-gradient-to-b from-profile to-white rounded-tr-[60px] rounded-bl-[60px] lg:max-w-[500px] xl:min-w-full">
        <div className="flex flex-col flex-1 min-w-[768px] bg-white px-20 lg:px-10 py-10 lg:py-6 rounded-tr-[60px] rounded-bl-[60px] overflow-y-auto scrollbar-none lg:min-w-[450px] xl:min-w-[620px]">
          <div className="mb-20">
            <div className="bg-grayOne rounded-t-[20px] rounded-br-[20px] p-6">
              <p className="font-normal font-ibm">
                Hi <span className="font-bold font-ibm">Paul</span>,
              </p>
              <p className="font-normal font-ibm mt-4">
                As a school leader, based on the data I see in these two files,
                here are some recommendations I can make on how to think about
                using this information.
              </p>
            </div>
            {recsList.map((e, i) => {
              return (
                <RecsCard
                  key={i}
                  recsNum={i + 1}
                  desc={e.desc}
                  pointers={e.pointers}
                />
              );
            })}
          </div>
          <div className="absolute bottom-0 left-0 px-20 z-10 py-8 flex flex-col justify-end items-center rounded-bl-[60px] pt-0 pb-0">
            {/*<div className="relative h-[40px] lg:h-[30px] lg:left-[-24px] w-[370px] bg-gradient-to-b from-transparent to-white"></div>*/}
            <div className="relative lg:left-[-40px] lg:w-[370px] pb-4 xl:pb-6 2xl:pb-8 rounded-t-[26px] xl:rounded-t-[32px] rounded-bl-[10px] main-bg xl:min-w-[540px] 2xl:min-w-[690px]">
              <div className="relative bg-black flex items-center h-[60px] lg:h-[50px] xl:h-[60px] 2xl:h-[70px] rounded-full px-2 input-bg left-[0px]">
                <div className="bg-iconBg rounded-full	p-1.5 2xl:p-2 lg:p-1 mr-3 ml-2">
                  <CiSearch className="text-black " size={23} />
                </div>
                <input
                  type="text"
                  id="search"
                  onKeyDown={async (ev) => {
                    if (ev.key === "Enter") {
                      const val = await getAiResponse(ev.target.value);
                      console.log(val);
                    }
                  }}
                  placeholder="Ask me any question or search..."
                  className="bg-transparent text-white min-w-[440px] lg:min-w-[150px] xl:min-w-[360px] 2xl:min-w-[510px]
           outline-0 text-[24px] 2xl:text-[24px] lg:text-[18.1px] font-normal font-ibm mr-16"
                />
                <div className="p-1.5">
                  <FaMicrophone className="text-grayish" size={23} />
                </div>
              </div>
              {/*<div className="relative h-[40px] w-full bg-white lg:left-[-40px] lg:w-[369px]"></div>*/}
            </div>
          </div>
        </div>
        <div className="bg-profile pt-10 gap-5 max-h-full max-w-full px-8 flex flex-col items-stretch relative rounded-tr-[60px] min-w-[25rem] w-[25rem] rounded-bl-[60px] lg:min-w-[17.5rem]">
          <div className="flex gap-x-4">
            <img
              src={historyicon}
              alt="history"
              className="h-[30px] 2xl:h-[40px]"
            />
            <p className="text-white font-ibm font-semibold text-[2rem] 2xl:text-[2.2rem] lg:text-[1.5rem] capitalize leading-[1.875rem]">
              History
            </p>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-full w-full h-12 min-h-[3rem] 2xl:min-h-[3rem] lg:min-h-[2.3rem] px-4 text-[#111] placeholder:text-[#111] text-base font-medium font-ibm opacity-50 bg-white focus:outline-none"
          />
          <div className="flex flex-col max-h-full items-center overflow-y-auto scrollbar-none gap-5">
            {[1, 2, 3, 4, 5, 6, 7, 10, 8, 9].map((_, index) => (
              <PromptCard key={index} />
            ))}
          </div>
          <div className="w-full pointer-events-none absolute bottom-0 left-0 z-10 h-44 p-4 flex flex-col justify-end items-center rounded-bl-[60px] bg-gradient-to-b from-[#38383800] via-[#383838B2] to-[#383838]">
            <p className="text-white text-center font-nunito text-base italic opacity-50 font-semibold leading-6">
              Loading More...
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessPage;
