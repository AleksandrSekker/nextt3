import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {DropDown} from "../components/DropDown/DropDown";
import {Select} from "../components/Select/Select";
import Sidebar from "./Sidebar/Sidebar";
import Link from "next/link";
import { locales, selectMiniSetup} from "../constants/general";
import routes from "../constants/routes";
import links from "../constants/links";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header>
      <nav className="bg-pinkHeader h-[68px] border-gray-200 px-4 lg:px-6 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center h-full m-auto max-w-screen-xl">
          <div className="flex items-center my-auto">
            {session?.user?.image ? <Image src={session?.user?.image} alt={'mini avatar'} width={30} height={30} className="rounded-full mr-2"/> : <FontAwesomeIcon icon={faUser} className=" text-white mr-2"/>}
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">{session?.user?.name || 'Guest'}</span>
          </div>
          <div className="flex items-center lg:order-2">
            <div className={"hidden lg:items-center w-full lg:flex lg:w-auto"}>
              {session ? (
                <button className={"text-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800"} onClick={() => signOut()}>
                    Logout
                </button>
              ) : (
                <button className={"text-white hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800"} onClick={() => signIn("discord")}>
                  Login with Discord
                </button>
              )}
            </div>
            <div className={'hidden lg:flex'}>
              <Select data={locales.map(({title, id, icon}) => (
                {title: title.toUpperCase(), id, icon}
              ))} />
            </div>
            <div className={'flex lg:hidden bg-blue-600'}>
              <Sidebar />
            </div>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col items-center font-medium lg:flex-row lg:space-x-1 lg:mt-0">
              <Link href={routes.home} className="text-white dark:text-white text-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800"
                aria-current="page" >
                Home
              </Link>
              <DropDown title={"Mini's setup"} data={selectMiniSetup} />
              <li>
                <a href={links.patreon} target="_blank" rel="noopener noreferrer"
                  className="text-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Patreon</a>
              </li>
              <li>
                <a href={links.merch}
                  target="_blank" rel="noopener noreferrer"
                  className="text-white hover:bg-white hover:text-black  hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Merch</a>
              </li>
              <Link href={routes.redpoint}
                className="text-white hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Redpoint</Link>
              <Link href={routes.contact}
                className="text-white hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Contact
              </Link>

            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
