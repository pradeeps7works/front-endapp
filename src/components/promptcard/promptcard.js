import React from "react";

const PromptCard = () => {
  return (
    <div className="w-full p-5 lg:p-2 xl:p-4 bg-white rounded-[20px] shadow">
      <div className="w-full text-neutral-800 text-lg lg:text-base xl:text-lg font-normal font-ibm leading-normal">
        Can you tell me which students are not meeting their grade-level
        standards?
      </div>
      <div className="flex pt-2 justify-between items-end gap-x-4">
        <div className="p-2.5 lg:w-[200px] xl:w-[250px] bg-emerald-100 rounded-[30px] font-nunito text-emerald-700 text-xs font-bold leading-3">
          2 Recommendations
        </div>
        <div className="opacity-50 lg:w-[80px] xl:w-[100px] text-neutral-800 text-opacity-75 text-xs font-normal font-['IBM Plex Sans'] leading-3">
          03:59 PM
        </div>
      </div>
    </div>
  );
};

export default PromptCard;
