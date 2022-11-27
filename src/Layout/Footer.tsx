import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,faFacebook,faTwitter, faTwitch, faPatreon, faPaypal
} from '@fortawesome/free-brands-svg-icons';
import style from './styles.module.css'
import Link from "next/link";
import Button3d from "../components/Button3d/Button3d";
const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 bg-pinkHeader dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <p className={"max-w-[600px] text-white"}>
              Wanna know a secret?
              I make £0 from most of my drum covers because of copyright so these are the best ways to
              help me continute calling this my job!
            </p>
            <p className={"text-white mt-1"}>please only do it if you can afford to as i can&rsquo;t offer refunds</p>

            <p className={"text-white text-sm mt-2"}>please only do it if you can afford to as i can&apos;t offer refunds</p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row w-1/2 h-full md:m-auto justify-around align-middle">
            <div>
              <Button3d text={"Patreon"} icon={faPatreon} />
            </div>
            <div>
              <Button3d text={"Paypal"} icon={faPaypal} />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">© Mini Fairhurst {new Date().getFullYear()}
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link href='/'>
              <FontAwesomeIcon icon={faInstagram} className={style.icons} />
            </Link>
            <Link href='/'>
              <FontAwesomeIcon icon={faYoutube} className={style.icons} />
            </Link>
            <Link href='/'>
              <FontAwesomeIcon icon={faTwitch} className={style.icons} />
            </Link>
            <Link href='/'>
              <FontAwesomeIcon icon={faFacebook} className={style.icons} />
            </Link>
            <Link href='/'>
              <FontAwesomeIcon icon={faTwitter} className={style.icons} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
