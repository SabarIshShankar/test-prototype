import React from "react";

export default function InputModal({ children, visible, onClose }) {
  if (!visible) return null;

  const handleOnBackDropClick = (e) => {
    if (e.target.id === "backdrop") onClose && onClose();
  };

  return (
    <div
      id="backdrop"
      onClick={handleOnBackDropClick}
      className="bg-black bg-opacity-50 backdrop-blur-sm fixed fixed-modal inset-0 flex items-center justify-center"
    >
      {children}
     
    </div>
  );
}