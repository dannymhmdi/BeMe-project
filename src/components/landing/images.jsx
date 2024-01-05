import React from "react";
import Image from "next/image";
import blc from "../../../public/images/noir-s.jpg";
import mahdi from "../../../public/images/mahdi.jpg";
import iman from "../../../public/images/iman.jpg";
import sadra from "../../../public/images/sadra.jpg";
import daniel from "../../../public/images/daniel.jpg";
import iman1 from "../../../public/images/iman-w-full.jpg";
const Images = () => {
  const animals = ["lion", "tiger", "eagle"];
  console.log("animals=", ...animals);
 
  return (
    <div className="grid grid-cols-2 gap-4" >
      <div className="border relative col-span-2s overflow-hidden">
        <div className="absolute w-full h-full opacity-0 border-4 cursor-pointer hover:opacity-100 hover:bg-rgba flex flex-col justify-center items-center text-white text-3xl">
          <div className="py-2">
            <h3> مهدی صادقی</h3>
          </div>
          <div  className="py-2">
            <p>موزیسین</p>
          </div>
        </div>
        <Image
          src={mahdi}
          // width={500}
          // height={500}
          quality={70}
          className="border-2 w-full rounded-2xls"
          alt="mahdi-sadeghi"
        />
      </div>
      <div className="border relative overflow-hidden">
        <div></div>
        <Image
          src={iman}
          // width={500}
          // height={500}
          alt="iman-hajiali"
          className="w-full rounded-2xls"
          quality={70}
        />
      </div>
      <div className="border relative overflow-hidden">
        <div></div>
        <Image
          src={sadra}
          // width={500}
          // height={0}
          alt="sadra-safavi"
          className="w-full h-full rounded-2xls"
          quality={70}
          // sizes="(max-width: 768px) 100vh , 500px"
        />
      </div>
      <div className="border relative">
        <div></div>
        <Image
          src={daniel}
          alt="daniel-mhmdi"
          className="w-full h-full rounded-xls"
          quality={80}
        />
      </div>
      <div className="border relative col-span-2">
        <div>22</div>
        <Image
          src={iman1}
          alt="iman-hajiali"
          className="w-full rounded-xls"
          quality={80}
        />
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
      <div className="border relative  " >
        <img src="" className="h-auto w-full" alt="" />
      </div>
    </div>
  );
};

export default Images;
