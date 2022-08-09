import React from "react";
import "./styles.css";
import HeaderImage from './header.png'
import Brands from './Brands'


export default function Discounts() {
  return (
    <div className="App font">
      <div className="bg-white">
        <div className="max-w-xl mx-auto py-5 px-2 sm:py-5u sm:px-6 lg:max-w-xl lg:px-8">
          <div className="items-center mb-5 content-center">
            <span className="text-2xl tracking-tight items-center">glimpse</span>
          </div>
          <div><img src={HeaderImage} className="object-cover h-full w-full items-center p-1"/></div>

          <div className="bg-gray-50 mt-2">
            <div className="p-3 my-3">
            <h1 className="text-xl">Discover top brands and their products</h1>
            <Brands/>
            </div>
          </div>

          <h2 className="text-1xl my-4 p-1">
            Claim Exclusive Discounts for products around you
          </h2>
          <div className="grid grid-flow-col gap-1 pb-2">
            <div className="col-span-1 box2">
              <div className="hover:bg-gray-50 p-1 rounded-lg transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-lg mb-2"
                    src="https://glimpse-public-images.s3.us-east-2.amazonaws.com/Lyric+Terracotta+SOLO+Undocked.jpg"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      15% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-lg transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-lg mb-2"
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/minky-minky-grey-rc-2_1080x.png?v=1640931533"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      20% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-flow-col gap-1 pb-2">
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-lg transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-lg mb-2"
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/Luxome-LAYRPillow-Lightbox_768x.png?v=1642777005"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      20% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="hover:bg-gray-50 p-1 rounded-lg transition ease-in-out">
                <div className="relative  overflow-hidden">
                  <img
                    className="h-48 lg:h-60 w-full object-cover rounded-lg mb-2"
                    src="https://cdn.shopify.com/s/files/1/0047/8121/1761/products/Centium_Sheets_and_Duvet_Grey_Grey_320490ae-60b4-430f-a696-f13c64eace16-903196_650x.jpg"
                  />
                  <div className="absolute py-4 w-fit bottom-0 inset-x-0  text-white text-xs text-center leading-4">
                    <div className="bg-red-600 mx-2 text-white rounded-full px-2 py-1">
                      15% OFF
                    </div>
                  </div>
                </div>
                <h1 className="text-md">Lyric Massager</h1>
                <div className="mb-1 text-md font-medium flex">
                  $330.00
                  <span className="line-through px-2 text-gray-500">
                    $350.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
