import React, { useContext } from "react";
import { TestimonialContext } from "../context/TestimonialContext";
import Card from "./Card";

const Container = () => {
  const { testimonials } = useContext(TestimonialContext);

  return (
    <div className="container m-auto align-middle h-screen lg:grid lg:content-center">
      <div className="flex flex-col lg:grid grid-cols-4 grid-rows-2 gap-5 content-center">
        <div className="row-span-0 col-span-2">
          <Card
            name={testimonials[0].name}
            position={testimonials[0].position}
            imageUrl={testimonials[0].imageUrl}
            quote={testimonials[0].quote}
            testimonialDescription={testimonials[0].testimonialDescription}
          />
        </div>
        <div className="col-start-3 col-span-1">
          <Card
            name={testimonials[1].name}
            position={testimonials[1].position}
            imageUrl={testimonials[1].imageUrl}
            quote={testimonials[1].quote}
            testimonialDescription={testimonials[1].testimonialDescription}
          />
        </div>
        <div className="row-span-2">
          <Card
            name={testimonials[4].name}
            position={testimonials[4].position}
            imageUrl={testimonials[4].imageUrl}
            quote={testimonials[4].quote}
            testimonialDescription={testimonials[4].testimonialDescription}
          />
        </div>
        <div>
          <Card
            name={testimonials[2].name}
            position={testimonials[2].position}
            imageUrl={testimonials[2].imageUrl}
            quote={testimonials[2].quote}
            testimonialDescription={testimonials[2].testimonialDescription}
          />
        </div>
        <div className="col-span-2">
          <Card
            name={testimonials[3].name}
            position={testimonials[3].position}
            imageUrl={testimonials[3].imageUrl}
            quote={testimonials[3].quote}
            testimonialDescription={testimonials[3].testimonialDescription}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
