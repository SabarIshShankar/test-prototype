import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const notifySuccess = () => {
    toast.success("Done!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  };

  return (
    <div>
      <button onClick={notifySuccess} className="w-full border p-2 rounded-lg bg-neutral-100">Submit</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
