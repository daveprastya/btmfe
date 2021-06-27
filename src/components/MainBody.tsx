import React from "react";
import WebContent from "./WebContent";
import MobileContent from "./MobileContent";
import IframeContent from "./IframeContent";
import { CardProps } from "../components/Card";
import { InView } from "react-intersection-observer";
import { motion, MotionConfigProps } from "framer-motion";

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

export default function MainBody() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [candidates, setCandidates] = React.useState<CardProps[]>([]);
  const [toogle, setToogle ] = React.useState<boolean>(false); 
  const reff = React.useRef<HTMLDivElement | null>(null);
  const fetchDatas = async () => {
    const req = await fetch(`${process.env.NEXT_PUBLIC_API}`);
    const res = await req.json();
    // @ts-ignore
    const candidates = res.map((candidate) => {
      return {
        name: candidate.name,
        job: candidate.job,
        description: candidate.description,
        category: candidate.category.title,
        image: candidate.imgUrl,
      };
    });
    await setCandidates(candidates);
  };

  React.useEffect(() => {
    fetchDatas();
  }, []);

  React.useEffect(() => {
    if (reff) {
      // @ts-ignore
      if (reff.current?.clientWidth >= 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }
  }, [reff.current]);

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

  const handleToogle = () => {
    setToogle(!toogle)
  }

  return (
    <div className="text-center" ref={reff}>
      <InView threshold={0.2}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              className="md:text-7xl text-4xl text-wardah-primary md:font-light font-extralight mt-14 mb-5 md:mb-10"
              animate={inView && animate} 
              initial={init}
              transition={transition}
            >
              #BeautyThatMoves
            </motion.div>
            <motion.div
              className="md:text-lg text-base px-8 pb-14 md:m-auto md:w-5/12"
              animate={inView && animate} 
              initial={init}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0.2,
                delay: 0.5
              }}
            >
              Who is the beauty that moves you? Be inspired by these women, or better
              yet, join the movement @women.in.movement
            </motion.div>
          </div>
        )}
      </InView>
      {isMobile ? (
        <MobileContent datas={candidates} animate={animate} init={init} transition={transition} modal={handleToogle} />
      ) : (
        <div className="md:flex md:flex-col hidden mx-32">
          <WebContent datas={candidates} animate={animate} init={init} transition={transition} modal={handleToogle} />
        </div>
      )}
      {toogle && (
        <IframeContent toogle={handleToogle} />
      )}
    </div>
  );
}
