import React from "react";

const Client = ({ name, position, imageUrl, ring = true }) => {
  return (
    <>
      <div className="flex flex-row">
        <img
          src={imageUrl}
          alt={name}
          className={`rounded-full w-fit m-2 mr-5 ${ring && "ring ring-white"}`}
        />
        <div className="flex flex-col place-content-start justify-center w-full">
          <h1 className="font-semibold flex text-white">{name}</h1>
          <p className="font-medium flex text-white opacity-50 text-[13px]">
            {position}
          </p>
        </div>
      </div>
    </>
  );
};

export default Client;
