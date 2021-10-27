import React, { MutableRefObject } from "react";
import Card, { CardProps } from "./Card";
import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { AnimateProps, TransitionProps } from "../../pages/index";

export default function MobileContent(props: {
  datas: CardProps[];
  animate: AnimateProps;
  init: AnimateProps;
  transition: TransitionProps;
  modal: () => void;
}) {
  const eduRef = React.useRef<HTMLDivElement | null>(null);
  const enviRef = React.useRef<HTMLDivElement | null>(null);
  const healRef = React.useRef<HTMLDivElement | null>(null);
  const filterEdDatas = (key: string) => {
    return props.datas.filter((data) => data.category === key);
  };
  const buttonScroll = (
    offset: number,
    ref: MutableRefObject<HTMLDivElement | null>
  ) => {
    ref.current && (ref.current.scrollLeft += offset);
  };

  const { animate, init, transition } = props;

  return (
    <div className="text-left ml-4">
      <InView threshold={[0.4, 0.2]}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              <div className="flex place-content-between mr-4">
                <p className="text-4xl font-extrabold font-TTnorm text-wardah-ardent">
                  EDUCATION
                </p>
                <div className="text-2xl font-extralight space-x-10">
                  <i
                    className={`fal fa-chevron-left`}
                    onClick={() => buttonScroll(-50, eduRef)}
                  />
                  <i
                    className="fal fa-chevron-right"
                    onClick={() => buttonScroll(50, eduRef)}
                  />
                </div>
              </div>
              <div
                id="1"
                ref={eduRef}
                className="flex flex-row space-x-4 relative overflow-x-auto pt-6 border-b-1 pr-4"
              >
                {filterEdDatas("EDUCATION").map((data, i) => (
                  <Card
                    data={data}
                    key={i}
                    isMobile={true}
                    animateDelay={(i % 3) * 0.5}
                    animate={animate}
                    init={init}
                    inView={inView}
                    modal={props.modal}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </InView>
      <InView threshold={[0.4, 0.2]}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              className="pt-8"
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              <div className="flex place-content-between mr-4">
                <p className="text-4xl font-extrabold font-TTnorm text-wardah-ardent">
                  ENVIRONTMENT
                </p>
                <div className="text-2xl font-extralight space-x-10">
                  <i
                    className="fal fa-chevron-left"
                    onClick={() => buttonScroll(-50, enviRef)}
                  />
                  <i
                    className="fal fa-chevron-right"
                    onClick={() => buttonScroll(50, enviRef)}
                  />
                </div>
              </div>
              <div
                ref={enviRef}
                className="flex flex-row space-x-4 relative overflow-x-auto pt-6 border-b-1 pr-4"
              >
                {filterEdDatas("ENVIRONTMENT").map((data, i) => (
                  <Card
                    data={data}
                    key={i}
                    isMobile={true}
                    animateDelay={(i % 3) * 0.5}
                    animate={animate}
                    init={init}
                    inView={inView}
                    modal={props.modal}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </InView>
      <InView threshold={[0.4, 0.2]}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              className="pt-8"
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              <div className="flex place-content-between mr-4">
                <p className="text-4xl font-extrabold font-TTnorm text-wardah-ardent">
                  HEALTH
                </p>
                <div className="text-2xl font-extralight space-x-10">
                  <i
                    className="fal fa-chevron-left"
                    onClick={() => buttonScroll(-50, healRef)}
                  />
                  <i
                    className="fal fa-chevron-right"
                    onClick={() => buttonScroll(50, healRef)}
                  />
                </div>
              </div>
              <div
                ref={healRef}
                className="flex flex-row space-x-4 relative overflow-x-auto pt-6 border-b-1 pr-4"
              >
                {filterEdDatas("HEALTH").map((data, i) => (
                  <Card
                    data={data}
                    key={i}
                    isMobile={true}
                    animateDelay={(i % 3) * 0.5}
                    animate={animate}
                    init={init}
                    inView={inView}
                    modal={props.modal}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </InView>
    </div>
  );
}
