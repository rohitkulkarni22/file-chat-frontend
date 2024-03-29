import React from "react";
import logo from "../assets/logo.svg";
import addIcon from "../assets/add-Icon.svg";

const HeaderComponent = () => {
    return (
      <header className="mr-[-6.875rem] w-[89.938rem] h-[4.813rem] bg-white shadow-[0px_-8px_25px_rgba(0,_0,_0,_0.22)] flex flex-row items-start justify-between py-[1.125rem] pr-[3rem] pl-[3.438rem] box-border top-[0] z-[99] sticky max-w-[108%] shrink-0 gap-[1.25rem] mq750:pl-[1.688rem] mq750:pr-[1.5rem] mq750:box-border">
        <div className="h-[4.813rem] w-[89.938rem] relative bg-white shadow-[0px_-8px_25px_rgba(0,_0,_0,_0.22)] hidden max-w-full" />
        <img
          className="h-[2.563rem] w-[6.556rem] relative min-h-[2.563rem] z-[1]"
          loading="lazy"
          alt=""
          src={logo}
        />
        <div className="flex flex-col items-start justify-start pt-[0.063rem] px-[0rem] pb-[0rem] pl-[1.5rem]">
          <button className="cursor-pointer pt-[0.688rem] pb-[0.625rem] pr-[2.063rem] pl-[2.25rem] bg-[transparent] h-[2.438rem] rounded-lg box-border flex flex-row items-start justify-start gap-[0.75rem] whitespace-nowrap z-[1] border-[1px] border-solid border-black hover:bg-darkslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-darkslategray-100 md:pl-[1.5rem] md:pl-[2.25rem]">
            <div className="h-[2.438rem] w-[11.25rem] relative rounded-lg box-border hidden border-[1px] border-solid border-black" />
            <img
              className="h-[1.125rem] w-[1.125rem] relative overflow-hidden shrink-0 min-h-[1.125rem] z-[1]"
              alt=""
              src={addIcon}
            />
            <div className="relative text-[0.875rem] font-semibold font-inter text-black text-left inline-block min-w-[4.938rem] z-[1]">
              Upload PDF
            </div>
          </button>
        </div>
      </header>
    );
  };
  
  export default HeaderComponent;
  