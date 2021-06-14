import React from "react";
import Card, { CardProps } from "./Card";

export default function WebContent (props: { datas: CardProps[] }) {
  const [selectedButton, setSelectedButton] = React.useState<string>("ALL");
  return (
    <>
      {/* Navigation */}
        <div className="flex place-content-center space-x-16 text-lg text-gray-400 font-medium">
          <div>
            <button
              className={`${
                selectedButton === "ALL" &&
                "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
              } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
              onClick={() => setSelectedButton("ALL")}
            >
              ALL
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedButton === "EDUCATION" &&
                "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
              } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
              onClick={() => setSelectedButton("EDUCATION")}
            >
              EDUCATION
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedButton === "ENVIRONTMENT" &&
                "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
              } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
              onClick={() => setSelectedButton("ENVIRONTMENT")}
            >
              ENVIRONTMENT
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedButton === "HEALTH" &&
                "text-blue-300 border-b-4 pb-7 border-blue-300 font-semibold pointer-events-none"
              } hover:text-blue-300 hover:border-b-4 pb-8 hover:border-blue-300`}
              onClick={() => setSelectedButton("HEALTH")}
            >
              HEALTH
            </button>
          </div>
        </div>
        {/* Content Card */}
        <div className="border-t-1 border-gray-400 py-12 grid grid-cols-3 justify-items-center gap-8">
          {props.datas.map((data,i) => (
            <Card data={data} key={i} isMobile={false} />
          ))}
        </div>
    </>
  )
}