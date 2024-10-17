import React from "react";
import LeftBar from "../../Components/LeftBar";
import RightBar from "../../Components/RightBar";
import InputField from "../../Components/InputField";
import Heading from "../../Components/Heading";
import Options from "../../Components/Options";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import Loader from "../../Components/Loader";
import { useCategory } from "../../Context/Category";

const Cat = () => {
  const { handleFields, state, handleSubmit, handleSelect } = useCategory();

  return (
    <div className="flex w-full min-h-screen">
      {/* sidebar */}
      <LeftBar />
      {/* rightbar */}
      <RightBar>
        {/* loader */}
        {state.isLoading ? <Loader /> : null}

        {/* redirect button */}

        <div className="flex justify-end my-4">
          <Link
            to="/catlist"
            className="bg-blue-900 text-white px-8 lg:py-2 py-1 mx-4 uppercase rounded-sm"
          >
            Category List
          </Link>
        </div>
        {/* category form container start */}
        <div className="cat-container flex flex-wrap justify-center items-center  p-[2px]">
          <div className="form-container w-[75%] h-full shadow p-2">
            {/* heading */}
            <Heading title="Add New Category" />
            <form onSubmit={handleSubmit}>
              <div className="form-group flex justify-between flex-wrap gap-2 w-full">
                {/* gold category select option */}

                <div className="flex justify-center items-center border w-1/4 flex-auto">
                  <select
                    name="category"
                    onChange={(e) => handleSelect(e)}
                    className=" border border-black p-2 w-full"
                  >
                    <Options value="gold" title="Gold" />
                    <Options value="silver" title="Silver" />
                  </select>
                </div>
                {/* sub category input field */}
                <div className="flex-auto">
                  <InputField
                    name="subCategory"
                    placeholder="Add New Sub Category"
                    onChange={(e) => handleFields(e)}
                    value={state.subCategory}
                  />
                </div>
              </div>
              {/* handle submit button */}
              <div className=" w-[150px] lg:w-[220px] my-4">
                <Button title="Submit" />
              </div>
            </form>
          </div>
        </div>
      </RightBar>
    </div>
  );
};

export default Cat;
