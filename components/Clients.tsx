"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> Colleagues & Friends</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Replaced "Tech's I've Worked With" with "Technologies Powering My Work" */}
        <h1 className="heading mt-10 mb-12 text-center">
          Technologies
          <span className="text-purple"> Powering My Work</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-20 max-lg:mt-10 px-4">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-3 items-center">
                <img
                  src={company.img}
                  alt={company.name}
                  className="md:w-12 w-6"
                />
                {/* Uncomment if you want to include nameImg */}
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
