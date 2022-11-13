import { Menu, Transition } from '@headlessui/react'
import type { IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
interface IDropDownProps {
  title: string,
  data: { title: string, icon: IconDefinition, link: string, id: number }[],
}
export const DropDown = ({title, data}: IDropDownProps) => {
  return (
    <div className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            className="inline-flex w-full justify-center rounded-md text-white bg-neutral-200 dark:bg-black bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {title}
            <div className="text-white">
              <FontAwesomeIcon icon={faChevronDown} className="ml-2 -mr-1 h-4 w-4 text-white"
                aria-hidden="true" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {data.map((item) => (
                <Menu.Item key={item.id}>
                  {({active}) => (
                    <Link href={item.link}>
                      <button
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {active ? (
                          <FontAwesomeIcon icon={item.icon}
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        ) : (
                          <FontAwesomeIcon icon={item.icon}
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                        )}
                        {item.title}
                      </button>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
