import React from 'react';
import {signIn, signOut, useSession} from "next-auth/react";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faDrum} from "@fortawesome/free-solid-svg-icons";
import {DropDown} from "../components/DropDown/DropDown";
import {Select} from "../components/Select/Select";
import {MenuButton} from "../components/MenuButton/MenuButton";

const Header = () => {
  const { data: session } = useSession();
  const [isOpen, setOpen] = React.useState(false);

  const menuButtonStyle = {
    marginLeft: "2rem"
  };
  return (
    <header>
      <nav className="bg-pinkHeader border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex items-center">
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
            <Select data={[
              { id: 1, title: 'EN', icon: 'gb', },
              { id: 2, title: 'ES', icon: 'es', },
              { id: 3, title: 'DE', icon: 'de', },
              { id: 4, title: 'FR', icon: 'fr', },
              { id: 5, title: 'UA', icon: 'ua', },
            ]} />

            <MenuButton
              isOpen={isOpen}
              onClick={() => setOpen(!isOpen)}
              strokeWidth="6"
              color="#fff"
              lineProps={{ strokeLinecap: "round" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              width="24"
              height="24"
              style={menuButtonStyle}
            />
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col items-center font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a href="#"
                  className="text-white dark:text-white text-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800"
                  aria-current="page">Home</a>
              </li>
              <DropDown title={"Mini's setup"} data={[
                {title: 'Drums && cymbals', link: "/", icon: faDrum, id: 1},
                {title: 'First time drum buyers', link: "/", icon: faDrum, id: 2},
                {title: 'Drum accessories', link: "/", icon: faDrum, id: 3},
                {title: 'Drum hardware', link: "/", icon: faDrum , id: 4},
                {title: 'Recording gear', link: "/", icon: faDrum, id: 5},
                {title: 'Streaming setup', link: "/", icon: faDrum, id: 6},
                {title: 'Lightning', link: "/", icon: faDrum, id: 7},
                {title: 'Random fun stuff', link: "/", icon: faDrum,  id: 8},
              ]} />
              <li>
                <a href="#"
                  className="text-white hover:bg-white hover:text-black font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Patreon</a>
              </li>
              <li>
                <a href="#"
                  className="text-white hover:bg-white hover:text-black  hover:bg-gray-50 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Merch</a>
              </li>
              <li>
                <a href="#"
                  className="text-white hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Redpoint</a>
              </li>
              <li>
                <a href="#"
                  className="text-white hover:bg-white hover:text-black  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 outline-none focus:outline-none dark:focus:ring-gray-800">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
