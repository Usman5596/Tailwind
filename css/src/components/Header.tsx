import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center bg-slate-400 px-[60px] py-2 w-full">
      <div>
        <Image src="/pana.png" alt="Panaverse" width={120} height={120} />
      </div>
      <div>
        <ul className="flex space-x-[60px] text-lg font-semibold">
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href="/">Explore</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href="/">About</Link>
          </li>
          <li className="hover:text-blue-600 pt-[8px]">
            <Link href="/">Contact</Link>
          </li>
          <div>
          <button className="bg-blue-600 text-white px-7 py-2 rounded-xl font-semibold text-lg">
            Apply
          </button>
        </div>
        </ul>
        </div>
    </div>
  );
}
