import React from "react";
import { AnimateProps, TransitionProps } from "../../pages/index";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export default function Header(props: {
  animate: AnimateProps;
  init: AnimateProps;
  transition: TransitionProps;
}) {
  const { animate, init, transition } = props;
  const reff = React.useRef<HTMLDivElement | null>(null);
  return (
    <div ref={reff}>
      <InView>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <div
              className="pt-4 text-white w-full lg:grid lg:grid-cols-3 grid-cols-1 lg:bg-cover hidden"
              style={{
                height: "900px",
                backgroundImage: "url('/background.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <div>
                <a href="https://www.wardahbeauty.com/" target="_blank">
                  <img
                    src={"/logo-wardah-hijau-tua.png"}
                    className="justify-self-start ml-5 w-20 mt-3 lg:inline hidden"
                  />
                </a>
              </div>
              <div className="hidden lg:inline"></div>
              <div className="hidden lg:inline"></div>
              <motion.img
                src={"/talent.png"}
                className="hidden lg:absolute lg:inline mt-16 w-full"
                animate={inView && animate}
                initial={init}
                transition={transition}
              />
              <div className="lg:col-span-2 lg:inline hidden"></div>
              <motion.div
                className="text-wardah-ardent font-TTnormXS mt-32 lg:inline hidden text-center"
                animate={
                  inView && {
                    x: 0,
                    opacity: 1,
                  }
                }
                initial={{
                  x: "100vh",
                  opacity: 0,
                }}
                transition={transition}
              >
                <div className="flex">
                  <div className="-ml-28">
                    <p
                      className="font-TTnormT h-auto"
                      style={{ fontSize: "200px", lineHeight: "80%" }}
                    >
                      #
                    </p>
                  </div>
                  <div>
                    <p className="xl:text-8xl text-7xl pb-3">BEAUTY</p>
                    <p className="xl:text-6xl text-5xl pb-3">MOVES YOU</p>
                    <p className="xl:text-3xl text-xl font-TTnorm">
                      Bergerak membawa manfaat
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div
              className="pt-4 text-white w-full grid lg:grid-cols-3 grid-cols-1 lg:bg-cover lg:hidden"
              style={{
                // height: "800px",
                backgroundImage: "url('/background.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <div className="lg:hidden inline">
                <div>
                  <a href="https://www.wardahbeauty.com/" target="_blank">
                    <img
                      src={"/logo-wardah-hijau-tua.png"}
                      className="xs:justify-self-start justify-self-center ml-5 w-20 mt-3 col"
                    />
                  </a>
                </div>
                <motion.div
                  className="text-wardah-ardent xs:text-left text-center flex justify-center mt-10"
                  animate={
                    inView && {
                      x: 0,
                      opacity: 1,
                    }
                  }
                  initial={{
                    x: "100vh",
                    opacity: 0,
                  }}
                  transition={transition}
                >
                  <div className="flex">
                    <div>
                      <p
                        className="font-TTnormT h-auto sm:text-10xl text-9xl"
                        style={{ lineHeight: "80%" }}
                      >
                        #
                      </p>
                    </div>
                    <div className="font-TTnormT font-bold">
                      <p className="sm:text-8xl pb-1 text-5xl">BEAUTY</p>
                      <p className="sm:text-7xl pb-1 text-4xl">MOVES YOU</p>
                      <p className="sm:text-3xl text-lg">
                        Bergerak membawa manfaat
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="w-full h-auto lg:hidden xs:bg-cover bg-contain bg-no-repeat"
                // style={{
                //   backgroundImage: "url('/talent-mobile.png')",
                // }}
                animate={inView && animate}
                initial={init}
                transition={transition}
              >
                <img src="/talent-mobile.png" width="100%" />
              </motion.div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
