import React, { useState } from "react";
import Chats from "./Chats";
import RoundedBtn from "./Common/RoundedBtn";
import { MdPeopleAlt } from "react-icons/md";
import { TbCircleDashed } from "react-icons/tb";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { HiDotsVertical, HiOutlineDotsVertical } from "react-icons/hi";
import { BiFilter, BiMessageAdd, BiSearch } from "react-icons/bi";
import { pp } from "../assets/whatsapp";
import { MdArrowBack, MdClose } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

function LeftMenu() {
  const [filter, setFilter] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    // LeftMenu container
    <div className="flex">
      <div className="py-3 px-2 bg-[#202d33] flex flex-col justify-between h-screen ">
        <div className="flex flex-col items-center">
          <RoundedBtn icon={<BsFillChatLeftTextFill />} />
          <RoundedBtn icon={<TbCircleDashed />} />
          <RoundedBtn icon={<MdPeopleAlt />} />
        </div>
        <div className="flex flex-col items-center mt-auto">
          <RoundedBtn icon={<IoSettingsOutline />} />
          <img src={pp} alt="profile_picture" className="rounded-full mt-2 w-[40px]" />
        </div>
      </div>
      <div className="w-[89%]">
        <div className="flex overflow-y-auto flex-col border-r border-neutral-700 w-100 h-screen">
          {/* Profile nav */}
          <div className=" p-3 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-white">Chats</h1>

            <div>
              <RoundedBtn icon={<BiMessageAdd/>} />
              <RoundedBtn icon={<HiOutlineDotsVertical />} />
            </div>
          </div>
          <div className="flex justify-between items-center h-[60px] p-2">
            <div className="relative w-[400px]">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#8796a1] cursor-pointer">
                {inputValue ? (
                  <MdArrowBack
                    className="h-5 text-green-600 w-5"
                    onClick={handleClearInput}
                  />
                ) : (
                  <BiSearch className="h-5 w-5" />
                )}
              </span>

              {/* Input field */}
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search or start a new chat"
                className="rounded-lg bg-[#202d33] text-[#8796a1] text-sm font-light outline-none pl-10 pr-10 py-2 w-full h-[35px] placeholder:text-[#8796a1] placeholder:text-sm placeholder:font-light"
              />

              {/* Right icon: Close */}
              {inputValue && (
                <span
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#8796a1] cursor-pointer"
                  onClick={handleClearInput}
                >
                  <MdClose className="h-5 w-5" />
                </span>
              )}
            </div>

            {/* Filter button */}
            <button
              className={`text-2xl m-2 p-1 rounded-full ${filter
                ? "bg-emerald-500 text-white rounded-full hover:bg-emerald-700"
                : "text-[#8796a1] hover:bg-[#3c454c]"
                }`}
              onClick={() => setFilter(!filter)}
            >
              <BiFilter />
            </button>
          </div>

          {/* Chats */}
          <Chats filter={filter} />
        </div>
      </div>
    </div>
  );
}

export default LeftMenu;
