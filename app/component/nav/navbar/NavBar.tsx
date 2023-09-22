"use client";
import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "../searchbar/SearchBar";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";

type Props = {};

export const NavBar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  // const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between py-4 relative">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            {" "}
            <a href="/">Evergreen</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center lg:space-x-10 space-x-7 opacity-90 text-[17px] ">
              <li>
                <a
                  href="/"
                  className="w-full inline-block py-3 hover:text-green-600"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="filter"
                  className="w-full inline-block py-3 hover:text-green-600"
                >
                  Filter
                </a>
              </li>
              <li>
                <a
                  href="myproducts"
                  className="w-full inline-block py-3 hover:text-green-600"
                >
                  My Products
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="max-md:hidden">
            <SearchBar />
          </div>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          >
            <Image
              src="/user.jpg"
              width={35}
              height={35}
              className=" rounded-full object-cover"
              alt=""
            />

            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <Link href="/signin">SignIn</Link>
            </div>
          </div>

          <Link href="/cart">
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => setShowNav(!showNav)}
            className="p-[9px] bg-gray-100 rounded-full md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/shop" className="py-3 inline-block w-full">
              Shop
            </a>
          </li>
          <li>
            <a href="/filter" className="py-3 inline-block w-full">
              Filter
            </a>
          </li>
          <li>
            <a href="/myproducts" className="py-3 inline-block w-full">
              My Products
            </a>
          </li>
        </ul>

        <SearchBar />
      </div>
    </div>
  );
};
