import React from 'react';
import Image from "next/image";
import Input from "../components/Input/Input";

const Contact = () => {
  return (
    <div className="px-8 py-12">
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl text-gray-100 font-bold leading-tight">Lets talk about everything!</h2>
            <div className="text-gray-100 mt-8">
              For all enquiries please <span className="underline">email</span> or fill out the form instead
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              src="https://images.pexels.com/photos/221166/pexels-photo-221166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              width={400}
              height={400}
              alt={'contact us image'}
            />
          </div>
        </div>
        <div className="">
          <Input title={'Full Name'} placeholder={'enter full name'} type={'text'} />
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" />
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
                          Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
