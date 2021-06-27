import React from "react";

export default function IframeContent(props: { toogle: () => void }) {
  return (
    <div className="bg-white fixed inset-0 justify-center items-center h-screen w-screen">
      <div className="relative flex justify-end md:px-5 w-full">
        <button className="mx-5">
          <i className="fas fa-times text-2xl font-normal" onClick={() => props.toogle()} />
        </button>
      </div>
      <iframe
        height="100%"
        width="100%"
        className="bg-white"
        allowFullScreen={true}
        src={process.env.NEXT_PUBLIC_CAMPAIGN}
      />
    </div>
  );
}
