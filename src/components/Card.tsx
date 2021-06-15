import React from "react";
export interface CardProps {
  name: string;
  job: string;
  description: string;
  image: string;
  category: string;
}

export default function Card(props: { data: CardProps; isMobile: boolean; animateDelay: number }) {
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
        <div className="text-white absolute w-11/12 -mt-14 mx-auto left-0 right-0 text-center">
          <button
            className="py-2 px-5 w-11/12"
            style={{
              backgroundColor: "#006F7A",
            }}
          >
            VOTE
          </button>
        </div>
      </div>
      <div className="bg-red-200 text-sm text-red-400 font-semibold self-start py-1 px-3 my-5">
        {props.data.category}
      </div>
      <div className="text-left">
        <p className="text-lg font-medium">{props.data.name}</p>
        <p className="text-sm">{props.data.job}</p>
      </div>
      <div className={`text-left my-5 text-sm ${toogle ? "" : "h-20 overflow-hidden overflow-clip"}`}>
        {props.data.description}
      </div>
      <div className="text-left text-blue-300 text-sm font-semibold">
        <button className="border-1 border-gray-300 py-2 px-5" onClick={() => setToogle(!toogle)}>
          READ MORE
        </button>
      </div>
    </div>
  );
}
