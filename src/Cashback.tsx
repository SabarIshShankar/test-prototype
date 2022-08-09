import React, { useState } from "react";
import {TagFilled, MessageFilled, DollarCircleFilled} from '@ant-design/icons'

const Cashback: React.FC = () => {
  return (
    <div className="border border-gray-200 overflow-hidden my-8 rounded-lg spread-8">
      
      <div className="text-left px-3 py-2 border-b bg-gray-50">
        <h1 className="text-md font-medium">How to get a cashback?</h1>
      </div>
      <div className="text-left px-3 pt-4 flex space-x-4">
        <h1 className="text-md font-medium">Step 1:</h1>
        <TagFilled/>
        <h1 className="text-md">Buy Hypervolt Go 2</h1>
      </div>
      <div className="text-left px-3 pt-4 flex space-x-4">
        <h1 className="text-md font-medium">Step 2:</h1>
        <MessageFilled/>
        <h1 className="text-md">Text <span className="font-medium text-yellow-600">3128107525</span> your receipt</h1>
      </div>
      <div className="text-left px-3 pt-4 flex space-x-4">
        <h1 className="text-md font-medium">Step 2:</h1>
        <DollarCircleFilled/>
        <h1 className="text-md">Get 20% cashback</h1>
      </div>
      
    </div>
  );
};

export default Cashback;
