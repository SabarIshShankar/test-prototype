import React, { useState } from "react";

const AboutBrand: React.FC = () => {

  return (
    <div className="border border-gray-200 overflow-hidden my-8 rounded-lg spread-8">
     


  	<img className="object-cover w-full h-36" src="https://images.ctfassets.net/sa0xzxw55dr7/6fHyQ3pDodXRfPwutq7PGg/1cd9d113f6f19cff70849c3fda2a3d8c/hypervolt-go-2-behind-the-design-desktop.jpg" alt="head" />
    <div className="flex ml-3 -mt-8">
        <img className="rounded-full border-solid border-white border-2 -mt-3  object-cover w-20 h-20" src="https://logos-world.net/wp-content/uploads/2021/12/Hyperice-New-Logo.png"/>		
    </div>
	<div className="text-left px-3 pb-6 pt-4">
    <h1 className="text-xl font-medium">Hyperice</h1>
    <h1 className="text-sm">“Our suite of products help to relieve tension, unlock sore muscles, and prime your body and mind to be at their best, so you can always find the simple fun in doing what you love to do, more.”</h1>
	</div>
    <div className="text-center px-3 py-2 border-t">
    <h1 className="text-md font-medium">Visit store</h1>
	</div>

    
    </div>
  );
};

export default AboutBrand;
