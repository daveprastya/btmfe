import Head from "next/head";
import React, { ReactChild } from "react";

interface LayoutProps {
  children: ReactChild[];
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>BEAUTY MOVES YOU - The Brave Beauties</title>
        <meta
          name="description"
          content="Teruntuk wanita yang berani mengekspresikan kecantikannya, dengan sikap yang membawa dampak baik bagi orang-orang di sekitar. Wanita yang percaya dengan didukung kecantikan dan sikapnya, suara mereka dapat didengar dengan lantang dan tindakan mereka dapat dianggap serius. Mereka adalah agen perubahan kecantikan, yang menginspirasi dan menggerakkan hati orang untuk melakukan kebaikan yang lebih besar."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="overflow-hidden" style={{ background: "#F8F6F5" }}>
        {props.children}
      </div>
    </>
  );
}
