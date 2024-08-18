import { IoCloseOutline } from "react-icons/io5";
import Button from "../Shared/Button";

const Popup = ({ popup, handlePopup }) => {
  return (
    <>
      {popup && (
        <div>
          <div className="h-screen w-screen bg-black/50 fixed top-0 left-0 z-50 backdrop-blur-sm">
            <div className="bg-white w-[300px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md rounded-xl dark:text-white p-4 dark:bg-gray-700 ">
              {/* cart form  */}
              <div className="flex items-center justify-between">
                <h1 className="font-semibold">Order Now</h1>
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={handlePopup}
                />
              </div>
              {/* form section  */}
              <div className="mt-4">
                <input type="text" placeholder="Name" className="input-tag" />
                <input type="email" placeholder="Email" className="input-tag" />
                <input type="text" placeholder="Address" className="input-tag" />
                <div className="flex justify-center">
                    <Button text={"Order Now"} bgColor={"bg-primary"} textColor={"text-white"} handler={handlePopup}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
