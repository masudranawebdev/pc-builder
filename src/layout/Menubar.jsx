import Link from "next/link";
import React from "react";

const Menubar = () => {
  return (
    <div className="main-container hidden z-50 lg:block bg-white shadow sticky top-0">
      <ul className="flex gap-5 sticky">
        <li className="group py-3">
          CPU / Processor
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
        <li className="group py-3">
          Motherboard
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
        <li className="group py-3">
          Ram
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
        <li className="group py-3">
          Power supply unit
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
        <li className="group py-3">
          Storage device
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
        <li className="group py-3">
          Monitor
          <ul className="hidden z-50 absolute top-10 bg-white border border-gray-300 rounded shadow group-hover:block border-t-4 border-t-secondary">
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 1</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 2</Link></li>
            <li className="px-4 py-2 hover:bg-gray-100"><Link href="#">Option 3</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;
