import React from 'react';
import type {
  FieldValues,
  UseFormRegister
} from "react-hook-form";
interface InputProps {
    title: string;
    placeholder: string;
    type: 'text' | 'password' | 'email' | 'textarea';
    className?: string;
    register: UseFormRegister<FieldValues>;
    name: string;
    errors: any;
}


const Input = ({title, placeholder, type, className, name, register, errors}: InputProps) => {
  const isErrorExist = Object.keys(errors || {}).length > 0;
  return (
    <div className={className}>
      <label className="uppercase text-sm text-white font-bold">{title}</label>
      {type === 'textarea' ?
        <textarea placeholder={placeholder} {...register(name)} className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
        :
        <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type={type} placeholder={placeholder} {...register(name)}/>}
      {isErrorExist && <div className='mt-2 text-red-600'>{errors?.message}</div>}
    </div>
  );
};

export default Input;
