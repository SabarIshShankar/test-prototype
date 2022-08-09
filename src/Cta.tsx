import React, { useState } from "react";
import "./styles.css";
import {
  ShoppingOutlined,
  HeartOutlined,
  CloseOutlined,
  ShareAltOutlined, LeftOutlined
} from "@ant-design/icons";
import InputModal from "./InputModal";
import { animated, useTransition } from "react-spring";
import { RWebShare } from "react-web-share";
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


export default function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [phone, setPhone] = useState('')

  return (
    <div className="bg-white App mb-24">
      <div className="max-w-2xl mx-auto py-5 px-2 sm:py-5 sm:px-3 lg:max-w-xl lg:px-8">
        <div className="flex text-xl justify-between mb-3 border-b border-gray-200 fixed-top max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-xl lg:px-8">
          <div className="flex text-2xl">
          <div className="pr-3">
              <button className=" ">
                <LeftOutlined />
              </button>
            </div>
            <h1 className="tracking-tight text-2xl">glimpse</h1>
            </div>
          <div className="flex text-2xl">
            <div className="px-3">
              <button className=" " onClick={() => setShowModal(true)}>
                <HeartOutlined />
              </button>
            </div>
            <div className="pl-3">
              <RWebShare
                data={{
                  text: "Share this Guest Experience",
                  url: "http://vip.tryglimpse.com/3189",
                  title: "VIP",
                }}
                onClick={() => console.log("shared successfully!")}
              >
                <button>
                  <ShareAltOutlined />
                </button>
              </RWebShare>
            </div>
          </div>
        </div>

        <div className="flex fixed1 bg-white border-t-2 border-gray-200 pt-3 max-w-2xl mx-auto lg:max-w-xl lg:px-8">
         
          <button
            onClick={() => setShowModal(true)}
            className="w-full text-sm flex h-12 mx-3 items-center spread-8 border border-slate-900 justify-center rounded-lg bg-gray-50 outline-none focus:outline-none"
          >
            <span className="px-2 font-medium">SAVE DISCOUNT FOR LATER</span>
            <HeartOutlined />
          </button>
        </div>
      </div>

      <InputModal visible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-white w-full p-5 rounded-lg-top fixed-modal box max-w-2xl mx-auto py-5 px-5 sm:py-5 sm:px-3 lg:max-w-3xl lg:px-8">
          <div className="flex justify-between">
            <h1 className="text-xl">GLIMPSE-497CD2</h1>
            <button onClick={() => setShowModal(false)} className="text-2xl">
              <CloseOutlined />
            </button>
          </div>

          <p className="py-1 text-gray-500">
            Where should we send the discount code to.
          </p>
      <PhoneInput
        international={false}
        placeholder="Enter phone number"
        value={phone}
        defaultCountry={'US'}
        className="h-12 w-full rounded-lg text-md text-center border px-2 focus:outline-none"
        type="tel"
        name="phone"
        id="phone"
        required
        onChange={setPhone as never}
      />
          <input
            placeholder="example@email.com"
            type="email"
            className=" w-full px-2 border border-gray-200 p-1 mt-3 h-12 rounded-lg focus:outline-none text-md"
          />
          <button className="w-full mt-3 mb-5 text-sm flex h-12 items-center justify-center rounded-lg bg-yellow-600 text-white outline-none focus:outline-none">
            GET DISCOUNT
          </button>
        </div>
      </InputModal>
    </div>
  );
}
