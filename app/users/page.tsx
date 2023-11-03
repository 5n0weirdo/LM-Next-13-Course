import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();

  return (
    <div>
      <Link href="/">
        <button className="px-3 py-1 bg-slate-900 hover:bg-slate-800 text-white rounded-md mb-5">
          Back home
        </button>
      </Link>
      <h1 className="text-2xl text-slate-900 font-semibold">User Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
