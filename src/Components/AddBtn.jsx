import React from "react";
import { Link } from "react-router-dom";

const AddBtn = ({ icon, title, link }) => {
  return (
    <Link to="/newcat">
      <div className="flex m-2">
        <div className="flex items-center  bg-blue-900 text-white py-2 px-8 gap-2">
          {icon}
          <div>Add New</div>
        </div>
      </div>
    </Link>
  );
};

export default AddBtn;
