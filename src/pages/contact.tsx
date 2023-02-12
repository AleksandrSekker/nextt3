import React, {useCallback} from 'react';
import Image from "next/image";
import Input from "../components/Input/Input";
import type {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import * as z from "zod";

const Contact = () => {
  const { t } = useTranslation('contact')
  const schema = z.object({
    name: z.string().nonempty().min(2),
    email: z.string().nonempty().email(),
    message: z.string().min(8),
  });
  const formOptions = { resolver: zodResolver(schema), mode: "onChange" };
  const {
    register, handleSubmit, formState, getValues, watch
  } = useForm(formOptions);
  const { errors } = formState;
  const sendHandler = useCallback(() => {
    console.log('watch', watch())
  }, [watch]);

  return (
    <div>
      <div
        className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl lg:text-5xl text-gray-100 font-bold leading-tight">{t('lets_talk')}</h2>
            <div className="text-gray-100 mt-8">
              {t('email_or_form_first')} <span className="underline">mini.fairhurst@gmail.com</span>  {t('email_or_form_last')}
            </div>
          </div>
          <div className="mt-8 text-center">
            <Image
              src="/images/telephone.png"
              width={400}
              height={400}
              alt={'contact us image'}
            />
          </div>
        </div>
        <form className="" onSubmit={handleSubmit(sendHandler)}>
          <Input title={t('name')} placeholder={t('namePlaceholder')} type={'text'}
            register={register}
            name="name"
            errors={errors.name} />
          <Input className={'mt-8'} title={t('email')} placeholder={t('emailPlaceholder')} type={'email'}             register={register}
            name="email"
            errors={errors.email} />
          <Input className="mt-8" title={t('message')} placeholder={t('messagePlaceholder')} type={'textarea'}             register={register}
            name="message"
            errors={errors.message} />
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              {t('sendButton')}
            </button>
          </div>
        </form>
      </div>

    </div>
  );
};

export const getStaticProps: GetStaticProps  = async ({locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['contact', 'common'])),
  },
});

export default Contact;
