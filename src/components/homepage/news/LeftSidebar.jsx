import Link from "next/link";
import React from "react";

const LeftSidebar = ({ cetagories, activeId }) => {
  return (
    <div className="font-bold text-3xl  col-span-3">
      <h2 className="font-bold text-4xl">All categories</h2>
      <ul className="flex flex-col gap-3 p-5">
        {cetagories.map((category) => (
          <li
            className={`${activeId === category.category_id ? "bg-slate-300" : "bg-gray-100"} rounded-xl font-bold text-center  text-lg  p-4`}
            key={category.category_id}
          >
            <Link
              href={`/category/${category.category_id}`}
              className="block p-2"
            >
              {category.category_name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSidebar;
