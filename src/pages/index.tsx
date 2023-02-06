import { useSession } from "next-auth/react";
import {CircleLoader} from "react-spinners";
import Image from "next/image";
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import type { GetStaticProps } from 'next'
const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    <CircleLoader color="#36d7b7" />
  }
  const { t } = useTranslation('common')
  return (
    <div className="flex px-4 h-full flex-col items-center">
      <h1 className="text-[40px] md:text-[91px] text-orangeColor">{t('h1')} MINI FAIRHURST</h1>
      <p >Hiiiiii {session?.user?.name ? session.user?.name: "everyone"}  here&lsquo;s my website wow cool nice </p>
      <p className={"max-w-3xl text-center mt-4"}>Here you can find everything to do with me, from my setup, my band and if you wanna work with me or ask me some questions you can contact me too wow isn&lsquo;t that exciting</p>
      <section>
        <h2 className={"text-center text-[35px] mt-5 mb-4"}>MINI&apos;S COVERS</h2>
        <div className={"flex flex-col md:flex-row justify-center gap-5"}>
          <iframe className={"rounded-lg"} width="320" height="180" src="https://www.youtube.com/embed/pJyA2377DVQ" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <iframe className={"rounded-lg"} width="320" height="180" src="https://www.youtube.com/embed/mtQVYAh2ONo"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <h2 className={"text-center text-[35px] mt-5 mb-4"}>MINI&apos;S VLOGS</h2>
        <div className={"flex flex-col md:flex-row justify-center gap-5"}>
          <iframe className={"rounded-lg"} width="320" height="180" src="https://www.youtube.com/embed/qQ7jGR7nYyA" title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
          <iframe className={"rounded-lg"} width="320" height="180" src="https://www.youtube.com/embed/w8zP-p-MgRU"
            title="YouTube video player" frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
        <div className={"mt-8 mb-4 flex flex-col md:flex-row gap-4"}>
          <Image className={"rounded-lg"} src={"https://static.wixstatic.com/media/680512_978017e8de484a2498425c3031509bfc~mv2.png/v1/fill/w_1026,h_360,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/680512_978017e8de484a2498425c3031509bfc~mv2.png"} alt={'merch'} width={400} height={165} />
          <Image className={"rounded-lg"} src={"https://static.wixstatic.com/media/680512_e9f30b4150ca4a66a2acdc5791ef40c6~mv2.png/v1/fill/w_868,h_360,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CAMEO.png"} alt={'merch'} width={400} height={165} />
        </div>
      </section>

    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Home;
