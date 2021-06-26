import React from "react";
import WebContent from "./WebContent";
import MobileContent from "./MobileContent";
import { CardProps } from "../components/Card";

export default function MainBody() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);
  const [candidates, setCandidates] = React.useState<CardProps[]>([]);
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

  return (
    <div className="text-center" ref={reff}>
      <div
        className="md:text-7xl text-4xl text-wardah-primary md:font-light font-extralight mt-14 mb-5 md:mb-10"
        data-aos={isMobile ? "" : "fade-up"}
      >
        #BeautyThatMoves
      </div>
      <div
        className="md:text-lg text-base px-8 pb-14 md:m-auto md:w-5/12"
        data-aos={isMobile ? "" : "fade-up"}
      >
        Who is the beauty that moves you? Be inspired by these women, or better
        yet, join the movement @women.in.movement
      </div>
      {isMobile ? (
        <MobileContent datas={candidates} />
      ) : (
        <div className="md:flex md:flex-col hidden mx-32">
          <WebContent datas={candidates} />
        </div>
      )}
    </div>
  );
}
