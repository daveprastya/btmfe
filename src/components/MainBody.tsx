import React from "react";
import WebContent from "./WebContent";
import MobileContent from "./MobileContent";
import IframeContent from "./IframeContent";
import { CardProps } from "../components/Card";
import { InView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { AnimateProps, TransitionProps } from "../../pages/index";

export default function MainBody(props: {
  animate: AnimateProps;
  init: AnimateProps;
  transition: TransitionProps;
}) {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [candidates, setCandidates] = React.useState<CardProps[]>([]);
  const [toogle, setToogle] = React.useState<boolean>(false);
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
  }, [reff.current?.clientWidth]);

  const { animate, init, transition } = props;

  const handleToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="text-center" ref={reff}>
      <InView threshold={[0.4, 0.2]}>
        {({ inView, ref, entry }) => (
          <div ref={ref}>
            <motion.div
              className="text-wardah-ardent font-TTnorm mt-14 mb-5 md:mb-10"
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              <p className="sm:text-5xl text-2xl lg:mb-3 mb-1">
                Brave Beauties adalah
              </p>
              <p className="sm:text-6xl text-3xl">BEAUTY THAT MOVES</p>
            </motion.div>
            <motion.div
              className="md:text-lg sm:text-base text-sm pb-14 md:m-auto lg:w-7/12 font-TTnorm"
              animate={
                inView ||
                (entry?.boundingClientRect.y && entry?.boundingClientRect.y < 0)
                  ? animate
                  : init
              }
              initial={init}
              transition={transition}
            >
              Mereka adalah wanita yang berani mengekspresikan kecantikannya,
              dengan sikap yang membawa dampak baik bagi orang-orang di
              sekitarnya. Mereka percaya bahwa dengan menggunakan kecantikan
              mereka, suara mereka dapat didengar dengan lantang dan tindakan
              mereka dapat dianggap serius. Mereka adalah agen perubahan
              kecantikan, yang menginspirasi dan menggerakkan hati orang untuk
              melakukan kebaikan yang lebih besar.
            </motion.div>
          </div>
        )}
      </InView>
      {isMobile ? (
        <MobileContent
          datas={candidates}
          animate={animate}
          init={init}
          transition={transition}
          modal={handleToogle}
        />
      ) : (
        <div className="md:flex md:flex-col hidden xl:mx-32 mx-2">
          <WebContent
            datas={candidates}
            animate={animate}
            init={init}
            transition={transition}
            modal={handleToogle}
          />
        </div>
      )}
      {toogle && <IframeContent toogle={handleToogle} />}
    </div>
  );
}
