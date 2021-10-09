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
    <InView>
      {({ inView, ref }) => {
        const checkView = props.isMobile ? props.inView : inView;
        return (
          <div ref={ref}>
            <motion.div
              className={`flex flex-col mb-12 shadow-sm ${
                props.isMobile ? "w-64 flex-shrink-0" : "max-w-xs"
              }`}
              animate={checkView ? animate : init}
              initial={init}
              transition={{
                type: "spring",
                duration: 2,
                bounce: 0.2,
                delay: animateDelay,
              }}
            >
              <div className="relative">
                <div className="font-TTnorm text-left pb-1 h-32">
                  <div className="py-1 h-3/4 font-extrabold text-4xl overflow-ellipsis overflow-hidden font-TTnormB">
                    <p>
                      {props.data.name.substr(0, props.data.name.indexOf(" ")).toUpperCase()}
                    </p>
                    <p>
                      {props.data.name.substr(props.data.name.indexOf(" ") + 1).toUpperCase()}
                    </p>
                  </div>
                  <div className="flex">
                    <div className="w-6">
                      <div className="border-b-1 border-black h-1/2"></div>
                      <div className="border-t-1 border-black h-1/2"></div>
                    </div>
                    <p className="text-sm font-extralight py-1 ml-2">
                      {props.data.job.toUpperCase()}
                    </p>
                  </div>
                </div>
                <img
                  src={props.data.image}
                  style={{ height: "353px", width: "100%" }}
                />
              </div>
              <div
                className="text-sm text-white font-semibold self-end py-1 px-5 mb-3 font-TTnorm rounded-l-full -mt-4 z-10"
                style={{
                  background:
                    "linear-gradient(270deg, #0A7889 0%, #80C1CB 100%)",
                }}
              >
                {props.data.category}
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
