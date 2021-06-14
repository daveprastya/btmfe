import React, { MutableRefObject } from "react";
import Card, { CardProps } from "./Card";

export default function MobileContent(props: { datas: CardProps[] }) {
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

  return (
    <div className="text-left ml-4">
      <div>
        <div className="flex place-content-between mr-4">
          <p className="text-3xl font-normal text-blue-300">EDUCATION</p>
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
            <Card data={data} key={i} isMobile={true} />
          ))}
        </div>
      </div>
      <div className="pt-8">
        <div className="flex place-content-between mr-4">
          <p className="text-3xl font-normal text-blue-300">ENVIRONTMENT</p>
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
            <Card data={data} key={i} isMobile={true} />
          ))}
        </div>
      </div>
      <div className="pt-8">
        <div className="flex place-content-between mr-4">
          <p className="text-3xl font-normal text-blue-300">HEALTH</p>
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
            <Card data={data} key={i} isMobile={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
