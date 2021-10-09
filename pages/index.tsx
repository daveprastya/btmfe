import React from 'react'
import { Layout, Header, MainBody, Footer } from "../src/components";


export type AnimateProps = {
  y: number | string,
  opacity: number
}
export type TransitionProps = {
  type: string,
  duration: number,
  bounce: number,
  delay: number
}

export default function Home() {
  const animate: AnimateProps = {
    y: 0,
    opacity: 1,
  }
  const init: AnimateProps = { 
    y: '100vh',
    opacity: 0
  }
  const transition: TransitionProps = {
    type: "spring",
    duration: 2,
    bounce: 0.2,
    delay: 0
  }
  return (
    <Layout>
      <Header animate={animate} init={init} transition={transition} />
      <MainBody animate={animate} init={init} transition={transition} />
      <Footer />
    </Layout>
  );
}
