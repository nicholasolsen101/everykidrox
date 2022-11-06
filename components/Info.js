import Container from "./Container";
import React from "react";

const Info = (props) => {
  return (
    <div className="bg-[url('/images/bg-blur.jpg')] bg-center bg-cover md:pt-28 pt-12">
      <Container className="pb-0">
        <div className="flex gap-12 md:flex-row flex-col">
          <div className="max-w-lg text-white basis-1/3">
            <h2 className="capitalize mb-4">We're making things simpler for you</h2>
            <p className="text-white">Excepteur culpa dolor cupidatat eiusmod elit. Ad velit in elit quis dolore dolore dolore ullamco dolor ex. Consequat voluptate voluptate occaecat Lorem fugiat aliquip sint consectetur non Lorem.</p>
          </div>
          <div className="max-w-3xl basis-2/3 flex-1 overflow-hidden rounded-t-xl md:-mr-28">
            <img src="./images/app-example.png" className="w-full" />
          </div>
        </div>
      </Container>
    </div >
  )
};

export default Info;
