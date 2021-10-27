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
                height: "70vw",
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
                src={"/talent-HR.png"}
                className="hidden lg:absolute lg:inline mt-16 w-full"
                animate={inView && animate}
                initial={init}
                transition={transition}
              />
              <div className="lg:col-span-2 lg:inline hidden"></div>
              <motion.div
                className="text-wardah-ardent font-TTnormXS mt-32 lg:inline hidden text-center -ml-20 font-bold"
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
                <div className="flex justify-center">
                  <div>
                    <p
                      className="font-TTnormT h-auto"
                      style={{ fontSize: "12vw", lineHeight: "80%" }}
                    >
                      #
                    </p>
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "6vw",
                        lineHeight: "90%",
                        textAlign: "left",
                      }}
                    >
                      BEAUTY
                    </p>

                    <p style={{ fontSize: "4vw", lineHeight: "90%" }}>
                      MOVES YOU
                    </p>
                  </div>
                </div>

                <p
                  className="font-TTnormS text-center pl-3"
                  style={{ fontSize: "3.8vw", lineHeight: "90%" }}
                >
                  BRAVE BEAUTIES
                </p>
              </motion.div>
            </div>
            <div
              className="pt-4 text-white w-full grid lg:grid-cols-3 grid-cols-1 lg:bg-cover lg:hidden"
              style={{
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
                  className="text-wardah-ardent xs:text-left text-center flex flex-col justify-center mt-10 font-bold mb-5"
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
                  <div className="flex justify-center">
                    <div>
                      <p
                        className="font-TTnormT h-auto"
                        style={{ fontSize: "28vw", lineHeight: "80%" }}
                      >
                        #
                      </p>
                    </div>
                    <div className="font-TTnormT">
                      <p
                        style={{
                          fontSize: "14vw",
                          lineHeight: "90%",
                          textAlign: "left",
                        }}
                      >
                        BEAUTY
                      </p>

                      <p style={{ fontSize: "9vw", lineHeight: "90%" }}>
                        MOVES YOU
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-TTnormS text-center pl-3"
                    style={{ fontSize: "8.5vw", lineHeight: "90%" }}
                  >
                    BRAVE BEAUTIES
                  </p>
                </motion.div>
              </div>
              <motion.div
                className="w-full h-auto lg:hidden xs:bg-cover bg-contain bg-no-repeat"
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
