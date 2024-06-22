"use client";

import React from "react";
import { PinContainer } from "../PinContainer/PinContainer";

export function Card({ title, href, description, img }) {
  return (
    <div className="h-[25rem] w-full flex items-center justify-center">
      <PinContainer title={title} href={href}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black ">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4">
            <img
              src={img}
              alt={description}
              className="w-full h-full object-cover rounded-[12px]"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
