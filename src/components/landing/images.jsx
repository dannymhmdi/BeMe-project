import React from "react";
import Image from "next/image";
import blc from "../../../public/images/noir-s.jpg";

const Images = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="border-4 relative col-span-2">
        <Image
          src={blc}
        //   width={500}
        //   height={900}
        // fill={true}
        // layout="fill"
        objectFit="cover"
        //   className="h-auto w-full"
          alt=""
        />
      </div>
      <div className="border relative ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
      <div className="border relative  ">
        <img src="" className="h-auto w-full" alt="" />
      </div>
    </div>
  );
};

export default Images;
