import Link from "next/link";
import React from "react";

const UserPage = () => {
  return (
    <div>
      <Link href="/">
        <button className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md mb-5">
          Back home
        </button>
      </Link>
      <h1 className="text-2xl text-slate-900 font-semibold">User Page</h1>
    </div>
  );
};

export default UserPage;
