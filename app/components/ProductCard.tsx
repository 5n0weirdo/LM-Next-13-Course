import React from "react";
import AddToCart from "./AddToCart";

const ProductCard = () => {
  return (
    <div>
      <div className="mt-5 flex-grow max-w-sm md:max-w-xl p-5 rounded-xl bg-slate-200 dark:bg-slate-800 shadow-xl border border-slate-700 dark:border-slate-200">
        <h1 className="text-slate-900 dark:text-white">
          ProductCard Component
        </h1>
        <AddToCart />
      </div>
    </div>
  );
};

export default ProductCard;
