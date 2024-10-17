import React from "react";
import { useDashboard } from "../Context/Dashboard";
import { BiSolidCategory } from "react-icons/bi";
import { MdDashboardCustomize } from "react-icons/md";
import { IoBagAddSharp } from "react-icons/io5";
import { FaList, FaCartArrowDown } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa6";
import { PiUserListFill } from "react-icons/pi";
import SideItem from "./SideItem";

const LeftBar = () => {
  const { toggleDashboard, type, handleType } = useDashboard();
  return (
    <div
      className={
        toggleDashboard
          ? " w-[0%]  border-r-2  shadow-sm relative top-0 left-[-180px] tr"
          : "w-[40%] border-r-2  shadow-sm lg:w-[15%] md:w-[30%] sm:w-[30%] p-[2px] tr"
      }
    >
      {/* main heading title */}
      <div className="h-[40px] flex items-center border-b gap-4">
        <img
          src="https://images.unsplash.com/photo-1651160670627-2896ddf7822f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGp3ZWxsZXJ5fGVufDB8fDB8fHww"
          className="w-[20px] h-[20px] rounded-full"
          alt=""
        />
        <li className="list-none text-blue-900 font-bold">HANI GOLDS</li>
      </div>
      {/* main */}
      <div className="h-[40px] flex items- my-1">
        <li className="list-none">MAIN</li>
      </div>
      {/* dashboard */}
      <div
        className={
          type == "dashboard"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("dashboard")}
      >
        <SideItem
          name="Dashboard"
          link="dashboard"
          icon={<MdDashboardCustomize />}
        />
      </div>
      {/* new category */}
      <div
        className={
          type == "newcat"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("newcat")}
      >
        <SideItem link="newcat" name="New Category" icon={<IoBagAddSharp />} />
      </div>
      {/* categorylist */}
      <div
        className={
          type == "catlist"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("catlist")}
      >
        <SideItem name="Category List" link="catlist" icon={<FaList />} />
      </div>
      {/* new product */}
      <div
        className={
          type == "newproduct"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("newproduct")}
      >
        <SideItem
          name="New Product"
          link="newproduct"
          icon={<IoBagAddSharp />}
        />
      </div>
      {/* product list */}
      <div
        className={
          type == "productslist"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("productslist")}
      >
        <SideItem
          name="Product List"
          link="productslist"
          icon={<FaProductHunt />}
        />
        {/* user list */}
      </div>
      {/* order list */}
      <div
        className={
          type == "orderlist"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("orderlist")}
      >
        <SideItem
          name="Order List"
          link="orderlist"
          icon={<FaCartArrowDown />}
        />
      </div>
      <div
        className={
          type == "userlist"
            ? "bg-black text-white mb-2"
            : "bg-white text-black mb-2"
        }
        onClick={() => handleType("userlist")}
      >
        <SideItem name="User List" link="userlist" icon={<PiUserListFill />} />
      </div>
    </div>
  );
};

export default LeftBar;
