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
      <InView threshold={0.2}>
        {({ inView, ref, entry }) => (
          <div
            className="pt-4 text-white w-full grid lg:grid-cols-3 grid-cols-1 lg:bg-cover"
            style={{
              height: "900px",
              backgroundImage: "url('/background1.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
            }}
            ref={ref}
          >
            <img
              src={"/Wardah-white.png"}
              className="xs:justify-self-start justify-self-center xs:pl-28 lg:w-full xs:w-60 w-36"
            />
            <motion.div
              className="text-wardah-primary font-TTnorm inline lg:hidden justify-self-center -mt-60 xs:text-left text-center"
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
              <p className="xs:text-7xl pb-3 text-5xl">BEAUTY</p>
              <p className="xs:text-7xl pb-3 text-5xl">MOVE YOU</p>
              <p className="xs:text-3xl text-xl">Bergerak membawa manfaat</p>
            </motion.div>
            <motion.div
              className="w-full h-auto lg:hidden xs:bg-cover bg-contain bg-no-repeat -mt-60"
              style={{
                backgroundImage: "url('/talent-mobile.png')",
              }}
              animate={inView && animate}
              initial={init}
              transition={transition}
            ></motion.div>
            <div className="hidden lg:inline"></div>
            <div className="hidden lg:inline"></div>
            <motion.img
              src={"/talent.png"}
              className="hidden lg:absolute lg:inline mt-28 w-full"
              animate={inView && animate}
              initial={init}
              transition={transition}
            />
            <div className="lg:col-span-2 lg:inline hidden"></div>
            <motion.div
              className="text-wardah-primary font-TTnorm mt-32 lg:inline hidden"
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
              <p className="text-7xl pb-3">BEAUTY</p>
              <p className="text-7xl pb-3">MOVE YOU</p>
              <p className="text-3xl">Bergerak membawa manfaat</p>
            </motion.div>
          </div>
        )}
      </InView>
      <InView threshold={0.2}>
        {({ inView, ref, entry }) => (
          <div className="grid grid-cols-2 mt-10" ref={ref}>
            <div>
              <motion.div
                className="w-1/2 mt-10"
                animate={inView ? animate : { y: "-100vh", opacity: 0 }}
                initial={{ y: "-100vh", opacity: 0 }}
                transition={transition}
              >
                <img
                  src={"/abstract-foundation.png"}
                  className="bg-cover"
                  style={{
                    borderTopLeftRadius: "30%",
                    borderBottomRightRadius: "30%",
                    marginLeft: "50%",
                  }}
                />
              </motion.div>
              <motion.div
                className="sm:w-1/2 w-3/5 relative"
                animate={inView ? animate : init}
                initial={init}
                transition={transition}
              >
                <img
                  src={"/header2.png"}
                  className="bg-cover"
                  style={{
                    borderTopRightRadius: "30%",
                    borderBottomLeftRadius: "30%",
                    border: "10px solid #F8F6F5",
                    marginTop: "-90%",
                    marginLeft: "15%",
                  }}
                />
              </motion.div>
            </div>
            <div className="font-TTnorm h-full flex items-center">
              <motion.div
                animate={
                  inView ? { x: 0, opacity: 1 } : { x: "100vh", opacity: 0 }
                }
                initial={{ x: "100vh", opacity: 0 }}
                transition={transition}
              >
                <p
                  className="text-4xl mb-9"
                  style={{
                    background:
                      "-webkit-linear-gradient(270deg, #80C1CB 0%, #0A7889 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  BRAVE BEAUTIES
                </p>
                <p className="text-sm text-justify pr-5">
                  The women who express their beauty boldly, with an attitude
                  that brings beautiful impact for those around them. They are
                  the beauty agent of change, who inspires and moves people
                  heart to do the greater good.
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </InView>
    </div>
  );
}
