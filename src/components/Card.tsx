import React from "react";
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
}) {
  const [toogle, setToogle] = React.useState<boolean>(false);
  return (
    <div
      className={`${
        props.isMobile ? "w-64 flex-shrink-0" : "max-w-xs"
      } flex flex-col mb-12`}
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-delay={props.animateDelay}
    >
      <div className="relative">
        <img src={props.data.image} />
        <div className="text-wardah-primary absolute w-11/12 -mt-14 mx-auto left-0 right-0 text-center">
          <button className="py-1 px-5 w-11/12 bg-wardah-button text-lg">VOTE</button>
        </div>
      </div>
      <div className="bg-wardah-pink text-sm text-wardah-danger font-semibold self-start py-1 px-3 my-5">
        {props.data.category}
      </div>
      <div className="text-left">
        <p className="text-lg font-medium">{props.data.name}</p>
        <p className="text-sm font-extralight">{props.data.job}</p>
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
          READ MORE
        </button>
      </div>
    </div>
  );
}
