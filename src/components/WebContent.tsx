import React from "react";
import Card, { CardProps } from "./Card";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AnimateProps, TransitionProps } from "../../pages/index";

export default function WebContent(props: {
  datas: CardProps[];
  animate: AnimateProps;
  init: AnimateProps;
  transition: TransitionProps;
  modal: () => void;
}) {
  const [state, setState] = React.useState<{
    selected: string;
    filtered: boolean;
  }>({
    selected: "ALL",
    filtered: false,
  });
  const { animate, init, transition } = props;
  const isFiltered = (props: string) => {
    if (props !== "ALL") {
      setState({
        selected: props,
        filtered: true,
      });
    } else {
      setState({
        selected: props,
        filtered: false,
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <InView threshold={[0.4, 0.2]}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              className="flex place-content-center space-x-16 text-lg text-gray-400 font-medium border-b-1"
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              <div>
                <button
                  className={`${
                    state.selected === "ALL" &&
                    "text-wardah-primary border-b-4 pb-7 border-wardah-primary font-semibold pointer-events-none"
                  } hover:text-wardah-primary hover:border-b-4 pb-8 hover:border-wardah-primary`}
                  onClick={() => isFiltered("ALL")}
                >
                  ALL
                </button>
              </div>
              <div>
                <button
                  className={`${
                    state.selected === "EDUCATION" &&
                    "text-wardah-primary border-b-4 pb-7 border-wardah-primary font-semibold pointer-events-none"
                  } hover:text-wardah-primary hover:border-b-4 pb-8 hover:border-wardah-primary`}
                  onClick={() => isFiltered("EDUCATION")}
                >
                  EDUCATION
                </button>
              </div>
              <div>
                <button
                  className={`${
                    state.selected === "ENVIRONTMENT" &&
                    "text-wardah-primary border-b-4 pb-7 border-wardah-primary font-semibold pointer-events-none"
                  } hover:text-wardah-primary hover:border-b-4 pb-8 hover:border-wardah-primary`}
                  onClick={() => isFiltered("ENVIRONTMENT")}
                >
                  ENVIRONTMENT
                </button>
              </div>
              <div>
                <button
                  className={`${
                    state.selected === "HEALTH" &&
                    "text-wardah-primary border-b-4 pb-7 border-wardah-primary font-semibold pointer-events-none"
                  } hover:text-wardah-primary hover:border-b-4 pb-8 hover:border-wardah-primary`}
                  onClick={() => isFiltered("HEALTH")}
                >
                  HEALTH
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </InView>

      {/* Content Card */}
      <div className="border-gray-400 py-12 grid grid-cols-3 justify-items-center gap-8">
        {state.filtered
          ? props.datas
              .filter((data) => data.category === state.selected)
              .map((data, i) => (
                <Card
                  data={data}
                  key={i}
                  isMobile={false}
                  animateDelay={(i % 3) * 0.5}
                  animate={animate}
                  init={init}
                  inView={false}
                  modal={props.modal}
                />
              ))
          : props.datas.map((data, i) => (
              <Card
                data={data}
                key={i}
                isMobile={false}
                animateDelay={(i % 3) * 0.5}
                animate={animate}
                init={init}
                inView={false}
                modal={props.modal}
              />
            ))}
      </div>
    </>
  );
}
