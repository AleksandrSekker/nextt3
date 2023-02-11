import { useSession } from "next-auth/react";
import {CircleLoader} from "react-spinners";
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
import Video from "../components/Home/Video";
const Home = () => {
  const { status } = useSession();

  if (status === "loading") {
    <CircleLoader color="#36d7b7" />
  }
  const { t } = useTranslation('home')
  return (
    <div className="flex px-4 h-full flex-col items-center">
      <h1 className="text-[40px] md:text-[91px] text-orangeColor">{t('title')}</h1>
      <p> {t('home:welcome_message')}</p>
      <p className={"max-w-3xl text-center mt-4"}>{t('subtitle')}</p>
      <section>
        <h2 className={"text-center text-[35px] mt-5 mb-4"}>{t('covers')}</h2>
        <div className={"flex flex-col md:flex-row justify-center gap-5"}>
          <Video srcId='pJyA2377DV' />
          <Video srcId='mtQVYAh2ONo' />
        </div>
        <h2 className={"text-center text-[35px] mt-5 mb-4"}>{t('vlogs')}</h2>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <Video srcId='qQ7jGR7nYyA' />
          <Video srcId='w8zP-p-MgRU' />
        </div>
        <div className={"mt-8 mb-4 flex flex-col md:flex-row justify-center gap-5 w-full"}>
          <Image
            className={"rounded-lg w-full aspect-[16/9]"}
            src={"https://static.wixstatic.com/media/680512_978017e8de484a2498425c3031509bfc~mv2.png/v1/fill/w_1026,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/680512_978017e8de484a2498425c3031509bfc~mv2.png"}
            alt={'merch'}
            width={300}
            height={300}
          />
          <Image
            className={"rounded-lg w-full aspect-[16/9]"}
            src={"https://static.wixstatic.com/media/680512_e9f30b4150ca4a66a2acdc5791ef40c6~mv2.png/v1/fill/w_868,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CAMEO.png"}
            alt={'merch'}
            width={300}
            height={300}
          />
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps  = async ({locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as string, ['home', 'common'])),
  },
});

export default Home;
