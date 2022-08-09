import "./styles.css";
import { EyeOutlined, CopyOutlined } from "@ant-design/icons";

import React, { useState } from "react";

const Text = () => (
  <div className="text-xl w-full">
    <div className="text-lg my-4">
      <div className="text-xl w-full">
        <div className="text-lg my-4 flex">
          <button className="w-full justify-between h-12 p-0.5 transition-colors duration-150 bg-yellow-g rounded-l-lg focus:shadow-outline">
            <span className="p-3">GLIMPSE</span>
          </button>
          <button className="bg-gray-900 p-2 text-white rounded-r-lg px-3">
            Copy
          </button>
        </div>
      </div>
    </div>
  </div>
);

function Discount() {
  const [showText, setShowText] = useState(false);
  const onClick = () => {
    if (showText === false) setShowText(true);
    else setShowText(false);
  };
  return (
    <div>
      <button
        className=" autolayout w-full flex justify-between elevate p-2 my-4 bg-white content-center rounded-lg text-black flex border border-neutral-300"
        onClick={onClick}
      >
        <div className="bg-yellow-600 text-white rounded-lg text-xs px-3 py-2">
          Get 20% OFF
        </div>
        <div>
          <span className="px-1">Click to view discount code</span>
        </div>
      </button>
      {showText ? <Text /> : null}
    </div>
  );
}

export default Discount;
