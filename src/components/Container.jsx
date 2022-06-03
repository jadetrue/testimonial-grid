import React, { useContext } from "react";
import { TestimonialContext } from "../context/TestimonialContext";
import Card from "./Card";

const Container = () => {
  const { testimonials } = useContext(TestimonialContext);

  return (
    <>
      <div className="pt-5 flex justify-center">
        Challenge by<span>&nbsp;</span>
        <a
          href="https://www.frontendmentor.io/home"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Frontend Mentor
        </a>
        . Coded by<span>&nbsp;</span>
        <a
          href="https://github.com/jadetrue"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Jade True
        </a>
        .
      </div>
      <div className="container mx-auto px-26 py-32 align-middle lg:grid lg:content-center">
        <div className="flex flex-col lg:grid grid-cols-4 grid-rows-2 gap-10 content-center">
          <div className="row-span-0 col-span-2">
            <Card
              name={testimonials[0].name}
              position={testimonials[0].position}
              imageUrl={testimonials[0].imageUrl}
              quote={testimonials[0].quote}
              testimonialDescription={testimonials[0].testimonialDescription}
              bgColor={"bg-purple-500"}
              ringColor={"ring-[#A775F1]"}
              backgroundImage={true}
            />
          </div>
          <div className="col-start-3 col-span-1">
            <Card
              name={testimonials[1].name}
              position={testimonials[1].position}
              imageUrl={testimonials[1].imageUrl}
              quote={testimonials[1].quote}
              testimonialDescription={testimonials[1].testimonialDescription}
              bgColor={"bg-blue-600"}
              ring={false}
            />
          </div>
          <div className="row-span-2">
            <Card
              name={testimonials[4].name}
              position={testimonials[4].position}
              imageUrl={testimonials[4].imageUrl}
              quote={testimonials[4].quote}
              testimonialDescription={testimonials[4].testimonialDescription}
              textDark={true}
              ring={false}
            />
          </div>
          <div>
            <Card
              name={testimonials[2].name}
              position={testimonials[2].position}
              imageUrl={testimonials[2].imageUrl}
              quote={testimonials[2].quote}
              testimonialDescription={testimonials[2].testimonialDescription}
              textDark={true}
              ring={false}
            />
          </div>
          <div className="col-span-2">
            <Card
              name={testimonials[3].name}
              position={testimonials[3].position}
              imageUrl={testimonials[3].imageUrl}
              quote={testimonials[3].quote}
              testimonialDescription={testimonials[3].testimonialDescription}
              bgColor={"bg-blue-800"}
              ring={true}
              ringColor={"ring-purple-500"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
