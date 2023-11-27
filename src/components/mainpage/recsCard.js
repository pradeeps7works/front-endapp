import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";

export default function RecsCard(props) {
  let { recsNum, desc, pointers } = props;
  let TipsCard = (tips) => {
    return (
      <div className="flex p-0 items-start mb-4">
        <div>
          <FaCheck size={20} className="mr-4 mt-1" />
        </div>
        <p className="text-black font-ibm font-normal text-[18px] lg:text-[14px] xl:text-[18px]">
          {tips}
        </p>
      </div>
    );
  };
  return (
    <div className="flex justify-start items-start bg-lightTeal rounded-t-[20px] rounded-br-[20px] mt-4">
      <div className="bg-grayTeal p-6 rounded-tl-[20px] rounded-br-[20px]">
        <HiOutlineLightBulb color="#008059" size={30} />
      </div>
      <div className="p-6 lg:p-4 xl:p-6">
        <p className="text-green-700 font-ibm font-bold text-[16px] ">
          RECOMMENDATION {recsNum}
        </p>
        <p className="text-black font-ibm font-normal text-[20px] mt-3 leading-7 lg:leading-6 lg:text-[16px] xl:leading-7 xl:text-[18px]">
          {desc}
        </p>
        <div className="mt-6">{pointers.map((e, i) => TipsCard(e))}</div>
      </div>
    </div>
  );
}
