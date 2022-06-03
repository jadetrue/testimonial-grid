import React from "react";

import Client from "./Client";

const Card = ({
  name,
  position,
  imageUrl,
  quote,
  testimonialDescription,
  bgColor,
  ringColor,
  textDark,
  ring,
  backgroundImage = false,
}) => {
  return (
    <div
      className={`${bgColor} h-full w-auto py-7 px-10 md:px-[50px] rounded-lg shadow-2xl flex flex-col justify-center relative`}
    >
      {backgroundImage && (
        <img
          src="./images/bg-pattern-quotation.svg"
          alt="Background quotation"
          className="absolute top-0 right-6 md:right-28 h-[150px]"
        />
      )}
      <div>
        <Client
          name={name}
          position={position}
          imageUrl={imageUrl}
          ringColor={ringColor}
          textDark={textDark}
          ring={ring}
        />
      </div>
      <div>
        <div className="flex flex-col relative">
          <div className="my-5">
            <h2
              className={`text-left font-semibold ${
                textDark ? "text-blue-600" : "text-white"
              } leading-tight text-[27px]`}
            >
              {quote}
            </h2>
          </div>
          <div className="">
            <h2
              className={`text-left ${
                textDark ? "text-blue-600" : "text-white"
              } opacity-70 text-lg`}
            >
              {testimonialDescription}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
