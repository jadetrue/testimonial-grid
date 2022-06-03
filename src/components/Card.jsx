import React from "react";

import Client from "./Client";

const Card = ({ name, position, imageUrl, quote, testimonialDescription }) => {
  return (
    <div className="bg-purple-500 h-full w-auto p-7 rounded-lg shadow-2xl">
      <div>
        <Client name={name} position={position} imageUrl={imageUrl} />
      </div>
      <div>
        <div className="flex flex-col">
          <div className="my-7">
            <h2 className="text-left font-bold text-white">{quote}</h2>
          </div>
          <div className="mb-7">
            <h2 className="text-left text-white opacity-70">
              {testimonialDescription}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
