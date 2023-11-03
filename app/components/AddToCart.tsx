"use client"
import React from "react";

const AddToCart = () => {
  return (
    <div>
      <button className="px-3 py-3 rounded-xl text-slate-100 dark:text-slate-100 bg-slate-900 dark:bg-slate-100" onClick={() => console.log("Clicked")}>Add To Cart</button>
    </div>
  );
};

export default AddToCart;
