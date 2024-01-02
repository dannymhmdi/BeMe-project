"use client";
import { useState } from "react";
import LandingLayout from "../layout/landing-layout/landing-layout.jsx";
import BasePage from "../src/components/base-page/base-page.jsx";
import { Button, Container } from "@mui/material";
import Image from "next/image";
export default function Home() {
  const [color, setColor] = useState("bg-teal-300");
  return (
    <>
      <LandingLayout>
        {/* <Button variant="contained"  className="text-teal-950 bg-teal-500" onClick={() => setColor('bg-teal-100')} >change color</Button> */}
        <button className="bg-teal-500 hover:bg-teal-200 text-white font-bold py-2 px-4 rounded">
          ccc
        </button>
        <p className="text-teal-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          explicabo omnis exercitationem architecto possimus consequatur
          mollitia voluptates officia? Quas omnis iusto pariatur provident
          exercitationem recusandae natus voluptatibus enim atque consequuntur.
        </p>
        <BasePage fluid={"false"}>
          <div className={`${color}`}>01</div>
          <div>02</div>
          <div>03</div>hhh
          <p>
            پروژه وزیرمتن یک خانواده تایپ‌فیس فارسی-عربی با ۹ وزن است که در سال
            ۱۳۹۴ با نام «وزیر» آغاز شد و در طول این سال‌ها طراحی و توسعه آن
            ادامه یافت. فونت وزیرمتن شکلی ساده و روان دارد و می‌توان از آن در
            اغلب زمینه‌ها استفاده کرد. برای حروف لاتین از فونت Roboto استفاده
            شده است. این یک نرم افزار آزاد و متن‌باز است.
          </p>
        </BasePage>
      </LandingLayout>
    </>
  );
}
