import React from "react";
import "./App.css";
import { TestimonialContext } from "./context/TestimonialContext";
import Testimonials from "./services/Testimonials";
import Container from "./components/Container";

function App() {
  const testimonials = Testimonials;

  return (
    <TestimonialContext.Provider value={{ testimonials }}>
      <div className="bg-blue-100">
        <Container />
      </div>
    </TestimonialContext.Provider>
  );
}

export default App;
