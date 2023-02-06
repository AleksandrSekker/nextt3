import React from 'react';

interface InputProps {
    title: string;
    placeholder: string;
    type: 'text' | 'password' | 'email'
}
const Input = ({title, placeholder, type}: InputProps) => {
  return (
    <>
      <label className="uppercase text-sm text-gray-600 font-bold">{title}</label>
      <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type={type} placeholder={placeholder} />
    </>
  );
};

export default Input;
