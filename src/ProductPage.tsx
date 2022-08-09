import { Carousel, Image } from "antd";
import React, { useState, Component } from "react";
import themeConfig from "./utils/utils";
import "./styles.css";
import Header from "./Header";
import Discount from "./Discount";
import Reviews from "./Reviews";
import InputBreak from "./Break";
import AboutBrand from "./About";
import ReactPlayer from "react-player";
import Cashback from "./Cashback";
import hg from "./hg.png";
import {
  ArrowDownOutlined,
  CloseOutlined,
  ShoppingOutlined,
  StarFilled,
} from "@ant-design/icons";
import CustomModal from "./custom";
import CTA from "./Cta";
import BG from "./bg";

const ProductPage: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="App font mb-24 text-black mt-16">
      <div className="max-w-lg mx-auto py-5 px-4 sm:py-5u sm:px-0 lg:max-w-xl lg:px-8 ">
        {/*<div className="flex underlined mb-5 mt-2">
        <div className="text-sm">Home</div>
        <div className="text-sm">Product Name</div>
  </div>*/}

        <div className="container1 w-full aspect-w-1 aspect-h-1 bg-gray-100 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <div className="relative">
            <Carousel autoplay dots={true}>
              <div className="">
                <div>
                  <Image
                    loading="lazy"
                    alt="product"
                    height="auto"
                    src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/e6949754-67ac-4db0-b62e-ff621b202ae9.jpeg"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    loading="lazy"
                    alt="product"
                    height="auto"
                    src="https://glimpse-brands-images.s3.us-east-2.amazonaws.com/bfbd9671-3b96-4536-88eb-fe744f51a063.jpeg"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    loading="lazy"
                    alt="product"
                    height="auto"
                    src="https://weightedjournal.com/wp-content/uploads/2020/04/Napper-weighed-blanket.jpg"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Image
                    loading="lazy"
                    alt="product"
                    height="auto"
                    src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
                  />
                </div>
              </div>
            </Carousel>
            <div className="absolute py-2.5 w-fit top-0 inset-x-0  text-white text-xs text-center leading-4">
              <div className="bg-white mx-2 text-black rounded-md px-2 py-1 font-medium">
                BESTSELLER
              </div>
            </div>
          </div>
        </div>

        <div className="pb-1 pt-2">
          <span className="lg:text-sm text-sm bg-green-600 rounded-md px-1 py-0.5 text-white">
            Save $21.50
          </span>
          <h1
            className="
							lg:text-lg
							text-lg mt-1 font-medium"
          >
            Hypervolt Go
          </h1>
          <div className="lg:text-2xl	text-xl flex">
            <span className="lg:text-2xl rounded-xl text-xl font-medium">
              $135.15
            </span>
            <span className="lg:text-2xl rounded-xl text-xl	text-gray-500 px-3 line-through">
              $159
            </span>
          </div>
        </div>

        <div className="flex"></div>
        <Discount />
        <button
          type="button"
          className="w-full px-2 text-sm mb-5 bg-yellow-600 text-white flex items-center justify-center h-12 rounded-lg bg-glimpse outline-none focus:outline-none"
        >
          <span className="px-2 font-medium">BUY ON WEBSITE</span>
          <ShoppingOutlined />
        </button>

        <Cashback />
        {/*<h1 className="text-lg text-gray-500 py-2">OFFERS</h1>

        <div className="flex justify-between items-center">
          <span className="text-sm">Copy & Use code to get 20%</span>
          <div className="pt-2 flex text-sm drop-shadow-md">
            <button className="border shadow-md border-dashed border-5 p-3">
              GLIMPSE-KPI100
            </button>
          </div>
  </div>

        <div className="pt-2 justify-between items-center pb-2">
          <span className="text-sm lg:text-xl ">
            Use code to get 25% off site wide <CopyOutlined />
          </span>

          <div className="text-lg my-2">
            <button className="w-full h-12 px-6 transition-colors duration-150 bg-yellow-g rounded-lg focus:shadow-outline">
              GLIMPSE-KPI
            </button>
          </div>
        </div>*/}

        <div className="border-b"></div>

        <h1 className="text-lg text-gray-500 py-2">DESCRIPTION</h1>

        <div className="text-sm pt-2 text-gray-500">
          With a thinner profile than a traditional comforter, this perfectly
          soft & breathable quilted blanket will keep you comfortable all year
          round. The naturally thermal-regulating bamboo viscose fabric and fill
          is perfect for hot sleepers, while still providing adequate warmth in
          the cooler months.
          <div className="flex">
            <button className="text-black" onClick={() => setShowModal(true)}>
              Read more
            </button>
          </div>
        </div>

        <div
          style={{
            borderRadius: 30,
          }}
        >
          {/*<Drawer title="Basic Drawer" style={{fontFamily: 'Gantari' }}className="rounded-2xl" placement="bottom" onClose={onClose} visible={visible}>
        <p>This buttery soft and breathable organic cotton weighted blanket is ideal for all seasons.
          Our organic long-staple cotton is pre-washed for buttery softness – just like your favorite T-shirt.

MADE IN GREEN by OEKO-TEX® and Fairtrade International certified

10 lbs Cotton Napper: 100% Organic cotton
15, 20 & 25 lbs Cotton Napper: 95% Organic cotton, 5% Spandex

A healthier choice for your home and the environment: organic cotton uses up to 90% less water than conventional farming methods and is free from harmful chemicals, pesticides, synthetics, or artificial softeners.</p>
  </Drawer>*/}
        </div>

        <div className="border-b pt-2"></div>

        <h1 className="text-lg text-gray-500 pt-2">REVIEWS</h1>
        <div className="flex rounded-lg">
          <p className="text-sm pr-2">4.9</p>

          <svg
            className=""
            width="15"
            height="15"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.84589 1.3063C5.99557 0.845644 6.64727 0.845644 6.79695 1.3063L7.9347 4.80795C8.00164 5.01397 8.19362 5.15345 8.41023 5.15345L12.0921 5.15345C12.5765 5.15345 12.7778 5.77325 12.386 6.05795L9.4073 8.2221C9.23205 8.34942 9.15873 8.5751 9.22566 8.78111L10.3634 12.2828C10.5131 12.7434 9.98586 13.1265 9.594 12.8418L6.61531 10.6776C6.44007 10.5503 6.20277 10.5503 6.02753 10.6776L3.04884 12.8418C2.65698 13.1265 2.12974 12.7434 2.27942 12.2828L3.41718 8.78111C3.48411 8.5751 3.41078 8.34942 3.23554 8.2221L0.256856 6.05795C-0.135001 5.77325 0.066386 5.15345 0.550748 5.15345L4.23261 5.15345C4.44922 5.15345 4.6412 5.01397 4.70813 4.80795L5.84589 1.3063Z"
              fill="#DB9406"
            />
          </svg>
        </div>
        <Reviews />
        <AboutBrand />

        <h1 className="text-lg text-gray-500 py-2">HIGHLIGHTS</h1>

        <div className="">
          <img
            loading="lazy"
            alt="product"
            className="h-full py-1 w-full object-cover plain-shadow rounded-lg border border-gray-200"
            src={hg}
          />
        </div>

        <div className="player-wrapper">
          <ReactPlayer
            url="https://player.vimeo.com/video/598506343?h=516698986d\u0026autoplay=1\u0026muted=1"
            controls
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>

        <InputBreak />
        <CTA />
        <div className="bg-white App mb-24 shadow-t">
          <CustomModal visible={showModal} onClose={() => setShowModal(false)}>
            <div className="bg-white w-full p-5 rounded-lg-top fixed-modal max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
              <div className="flex justify-between">
                <h1 className="text-2xl">Specs and Information</h1>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-2xl"
                >
                  <CloseOutlined />
                </button>
              </div>

              <p className="py-1 text-gray-500">
                This buttery soft and breathable organic cotton weighted blanket
                is ideal for all seasons. Our organic long-staple cotton is
                pre-washed for buttery softness – just like your favorite
                T-shirt. MADE IN GREEN by OEKO-TEX® and Fairtrade International
                certified 10 lbs Cotton Napper: 100% Organic cotton 15, 20 & 25
                lbs Cotton Napper: 95% Organic cotton, 5% Spandex A healthier
                choice for your home and the environment: organic cotton uses up
                to 90% less water than conventional farming methods and is free
                from harmful chemicals, pesticides, synthetics, or artificial
                softeners.
              </p>
            </div>
          </CustomModal>
          <BG />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
