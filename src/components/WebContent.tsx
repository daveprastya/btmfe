import React from "react";
import Card, { CardProps } from "./Card";

export default function WebContent(props: { datas: CardProps[] }) {
  const [state, setState] = React.useState<{
    selected: string;
    filtered: boolean;
  }>({
    selected: "ALL",
    filtered: false,
  });
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
      <div className="flex place-content-center space-x-16 text-lg text-gray-400 font-medium border-b-1" data-aos="fade-up">
        <div>
          <button
            className={`${
              state.selected === "ALL" &&
              "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
            } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
            onClick={() => isFiltered("ALL")}
          >
            ALL
          </button>
        </div>
        <div>
          <button
            className={`${
              state.selected === "EDUCATION" &&
              "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
            } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
            onClick={() => isFiltered("EDUCATION")}
          >
            EDUCATION
          </button>
        </div>
        <div>
          <button
            className={`${
              state.selected === "ENVIRONTMENT" &&
              "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
            } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
            onClick={() => isFiltered("ENVIRONTMENT")}
          >
            ENVIRONTMENT
          </button>
        </div>
        <div>
          <button
            className={`${
              state.selected === "HEALTH" &&
              "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
            } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
            onClick={() => isFiltered("HEALTH")}
          >
            HEALTH
          </button>
        </div>
      </div>
      {/* Content Card */}
      <div className="border-gray-400 py-12 grid grid-cols-3 justify-items-center gap-8">
        {state.filtered
          ? props.datas
              .filter((data) => data.category === state.selected)
              .map((data, i) => <Card data={data} key={i} isMobile={false} animateDelay={(i%3)*500} />)
          : props.datas.map((data, i) => (
              <Card data={data} key={i} isMobile={false} animateDelay={(i%3)*500} />
            ))}
      </div>
    </>
  );
}
