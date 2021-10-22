import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { AnimateProps } from "../../pages/index";

export interface CardProps {
  name: string;
  job: string;
  description: string;
  image: string;
  category: string;
}

export default function Card(props: {
  data: CardProps;
  isMobile: boolean;
  animateDelay: number;
  animate: AnimateProps;
  init: AnimateProps;
  inView: boolean;
  modal: () => void;
}) {
  const [toogle, setToogle] = React.useState<boolean>(false);
  const { animate, init, animateDelay } = props;
  return (
    <InView threshold={[0.4, 0.2]}>
      {({ inView, ref, entry }) => {
        const checkView = props.isMobile
          ? props.inView && animate
          : inView ||
            (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
          ? animate
          : init;
        return (
          <div ref={ref}>
            <motion.div
              className={`flex flex-col mb-12 shadow-sm ${
                props.isMobile && "w-72"
              }`}
              style={{
                maxWidth: '315px'
              }}
              animate={checkView}
              initial={init}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0.2,
              }}
            >
              <div className="relative">
                <div className="font-TTnorm text-left pb-1">
                  <div className="py-1 h-20 font-extrabold text-4xl overflow-ellipsis overflow-hidden font-TTnormB mb-3">
                    <p>
                      {props.data.name
                        .substr(0, props.data.name.indexOf(" "))
                        .toUpperCase()}
                    </p>
                    <p>
                      {props.data.name
                        .substr(props.data.name.indexOf(" ") + 1)
                        .toUpperCase()}
                    </p>
                  </div>
                  <div className="flex h-10">
                    <div className="w-6">
                      <div className="border-b-1 border-black h-1/2"></div>
                      <div className="border-t-1 border-black h-1/2"></div>
                    </div>
                    <div
                      className="text-xs font-light ml-2 h-full flex"
                      style={{
                        WebkitLineClamp: 2,
                      }}
                    >
                      <p className="self-center">
                        {props.data.job.toUpperCase()}
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  src={props.data.image}
                  style={{ height: "353px", width: "315px" }}
                />
              </div>
              <div
                className="text-xl text-white text-right font-semibold self-end px-1 h-6 mb-3 font-TTnormS -mt-4 z-10 w-3/5"
                style={{
                  background:
                    "linear-gradient(270deg, #0c7a98 0%, #99d2b2 100%)",
                }}
              >
                <p
                  style={{ textShadow: "0.5px 0.5px gray", marginTop: "-14px" }}
                >
                  {props.data.category}
                </p>
              </div>
              <div
                className={`text-left mb-5 md:mt-5 mt-3 text-sm ${
                  toogle ? "" : "md:h-14 h-10 overflow-ellipsis overflow-hidden"
                }`}
              >
                {props.data.description}
              </div>
              <div className="text-left text-wardah-primary text-sm font-semibold">
                <button
                  className="border-1 border-wardah-primary py-2 px-5"
                  onClick={() => setToogle(!toogle)}
                >
                  {!toogle ? "READ MORE" : "READ LESS"}
                </button>
              </div>
            </motion.div>
          </div>
        );
      }}
    </InView>
  );
}
