import {useEffect, useState} from 'react'
import Flag from 'react-world-flags'
import { Listbox, Transition } from '@headlessui/react'

interface ISelectProps {
  data: {title: string, icon: string, id: number}[],
}

export const Select = ({data}: ISelectProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState(data[0])

  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem('language', selectedLanguage.title)
    }
  }, [selectedLanguage])
  return (
    <div className={'block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 text-right'}>
      <Listbox as="div" className="relative inline-block text-left" value={selectedLanguage} onChange={setSelectedLanguage}>
        {({ open }) => (
          <>
            <Listbox.Button
              className="inline-flex w-full justify-center rounded-md text-white bg-neutral-200 dark:bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">

              <div className={"mt-1.5"}>
                {selectedLanguage?.title}
              </div>
              <div className="w-8 h-8 ml-2 flex justify-center">
                <Flag code={selectedLanguage?.icon} />
              </div>
            </Listbox.Button>
            <Transition
              show={open}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >

              <Listbox.Options as="div" className={"absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"} static>
                <div className={"px-1 py-1 list-none "}>
                  {data.map((item) => (
                    <Listbox.Option key={item.id} value={item}>

                      <button
                        className={`group flex w-full items-center rounded-md px-2 py-2 text-sm list-none`}>
                        <div className={'list-none text-black text-gray-400 mr-auto'}>
                          {item.title}
                        </div>
                        <div className="mr-2 h-5 w-5">
                          <Flag code={item.icon} />
                        </div>
                      </button>

                    </Listbox.Option>
                  ))}
                </div>
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}
