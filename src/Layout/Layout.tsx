import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({
  children
}: {
    children: React.ReactNode
}) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>MINI FAIRHURST</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
