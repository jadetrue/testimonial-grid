import React from "react";

const Client = ({
  name,
  position,
  imageUrl,
  ring = true,
  ringColor,
  textDark,
}) => {
  return (
    <>
      <div className="flex flex-row">
        <img
          src={imageUrl}
          alt={name}
          className={`rounded-full h-10 w-fit m-2 mr-5 ${
            ring && "ring"
          } ${ringColor}`}
        />
        <div className="flex flex-col place-content-start justify-center w-full">
          <h1
            className={`font-semibold flex ${
              textDark ? "text-blue-800" : "text-white"
            }`}
          >
            {name}
          </h1>
          <p
            className={`font-medium flex ${
              textDark ? "text-blue-800" : "text-white"
            } opacity-50 text-[13px]`}
          >
            {position}
          </p>
        </div>
      </div>
    </>
  );
};

export default Client;
