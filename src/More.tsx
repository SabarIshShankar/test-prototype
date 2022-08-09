import React from "react";
import "./styles.css";

export default function MoreImages() {
  return (
    <div className="">
      <div className="rounded-lg border border-gray-200">
        <img
          loading="lazy"
          alt="product"
          className="h-56 w-full object-cover"
          src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
        />
        <img
          loading="lazy"
          alt="product"
          className="h-56 w-full object-cover"
          src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
        />
        <img
          loading="lazy"
          alt="product"
          className="h-56 w-full object-cover"
          src="https://cdn.shopify.com/s/files/1/0026/5178/3237/products/charcoalBB-4_1080x.png?v=1640930452"
        />
      </div>
      
    </div>
  );
}
