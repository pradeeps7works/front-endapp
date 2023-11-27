import React, { Component } from "react";
import { FaPlusCircle } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import getFiles from "../../apis/files/getFiles";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.fileInputRef = React.createRef();
    this.state = {
      cat: [],
      active: "files",
      selectedFiles: [],
    };
  }
  componentDidMount() {
    getFiles().then((files) => {
      this.setState({ cat: files });
    });
  }

  handleFileChange = (event) => {
    this.setState({
      selectedFiles: [...event.target.files],
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    let selectedFiles = this.state.selectedFiles;

    // Perform actions with the selected files (e.g., upload to a server)
    if (selectedFiles.length > 0) {
      console.log("Selected Files:", selectedFiles);
      // Here, you can implement your file upload logic, e.g., using Axios or fetch
      // For simplicity, we're just logging the selected files to the console.
    } else {
      console.error("No files selected.");
    }
  };
  handleButtonClick = () => {
    // Programmatically trigger the file input click
    this.fileInputRef.current.click();
  };
  render() {
    return (
      <div className="relative bg-black min-w-fit w-[25rem] max-w-[25rem] min-h-screen h-screen">
        <div className="h-28 min-h-[112px] bg-profile"></div>
        <div className="flex px-8 gap-2 justify-around items-end bg-profile rounded-bl-[60px] pt-5">
          <div
            onClick={() => {
              if (this.state.active !== "files") {
                this.setState({ active: "files" });
              }
            }}
            className="flex flex-1 flex-col items-center cursor-pointer"
          >
            <h1
              className={`
            font-ibm font-bold mb-4 2xl:text-[22px]
            ${this.state.active === "files" ? "text-white" : "text-grayish"}
            `}
            >
              Data Files
            </h1>
            <div
              className={`border-t-2 ${
                this.state.active === "files"
                  ? "border-iconBg"
                  : "border-transparent"
              } w-[20px]`}
            ></div>
          </div>
          <div
            onClick={() => {
              if (this.state.active !== "safety") {
                this.setState({ active: "safety" });
              }
            }}
            className="flex flex-1 flex-col items-center cursor-pointer"
          >
            <h1
              className={`
            font-ibm font-bold mb-4 2xl:text-[22px]
            ${this.state.active === "safety" ? "text-white" : "text-grayish"}
            `}
            >
              Data Safety
            </h1>
            <div
              className={`border-t-2 ${
                this.state.active === "safety"
                  ? "border-iconBg"
                  : "border-transparent"
              } w-[20px]`}
            ></div>
          </div>
        </div>
        {this.state.active === "files" ? (
          <div className="bg-black flex flex-wrap w-[23.75rem] max-h-[calc(100%-174px)] py-12 px-5 lg:w-[18rem] xl:w-[21rem] 2xl:w-[23rem] lg:px-3">
            {/*<form action="" className="w-full" onSubmit={this.handleFormSubmit}>
              <input
                type="file"
                id="uploadfiles"
                ref={this.fileInputRef}
                onChange={this.handleFileChange}
                hidden
        />*/}
            {/*<button
              className="w-full"
              type="button"
              onClick={this.handleButtonClick}
      >*/}
            <div className="bg-darkGreen flex justify-between items-center p-3 rounded-full w-full">
              <p className="text-black text-[22px] font-nunito font-[700] lg:text-[20px] xl:text-[22px]">
                Add New Data File
              </p>
              <FaPlusCircle size={26} />
            </div>
            {/*</button>*/}
            {/*</form>*/}
            <ul className="py-4 pr-20">
              {this.state.cat.map((item, index) => {
                return (
                  <li key={index} className="my-3 flex items-center">
                    <Checkbox
                      id={item}
                      sx={{
                        color: "#888888",
                        "&.Mui-checked": {
                          color: "#FF75C8",
                        },
                      }}
                    />
                    <label
                      htmlFor={item}
                      className="text-white font-nunito font-medium text-[20px] lg:text-[17px] xl:text-[18px] 2xl:text-[22px] "
                    >
                      {item}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="w-[23.75rem] max-h-[calc(100%-174px)] overflow-y-auto scrollbar-none bg-black py-7 px-5 lg:w-[18rem] 2xl:w-[23rem] xl:w-[21rem]">
            <p className="max-w-full font-ibm text-xl text-white opacity-75">
              We understand the importance of safeguarding the educational data
              entrusted to us. We are committed to maintaining the highest
              standards of data security and privacy.
            </p>
            <div className="pt-10 pb-5 text-white font-ibm text-2xl leading-[30px] font-bold">
              Our Promise to you
            </div>
            <div className="max-w-full opacity-75">
              <p className="text-white text-[1.375rem] font-bold font-ibm leading-[1.875rem]">
                Strict Privacy Controls:
              </p>
              <p className="text-white text-[1.375rem] font-normal font-ibm leading-[1.875rem]">
                Your data is protected with robust privacy measures, ensuring
                that sensitive information remains confidential.
              </p>
              <br />
              <p className="text-white text-[1.375rem] font-bold font-ibm leading-[1.875rem]">
                Compliance with Regulations:
              </p>
              <p className="text-white text-[1.375rem] font-normal font-ibm leading-[1.875rem]">
                We adhere to all relevant education data protection laws and
                regulations, including FERPA and GDPR where applicable.
              </p>
              <br />
              <p className="text-white text-[1.375rem] font-bold font-ibm leading-[1.875rem]">
                Secure Infrastructure:
              </p>
              <p className="text-white text-[1.375rem] font-normal font-ibm leading-[1.875rem]">
                Our systems are built with advanced security protocols to
                prevent unauthorized access and data breaches.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Sidebar;
