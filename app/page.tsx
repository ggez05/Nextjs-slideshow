"use client";
import NavigationButton from "@/components/NavigationButton";
import Slide from "@/components/Slide";
import { useState } from "react";
import slidesData from "./../data/slidesData.json";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const changeSlide = (direction: number) => {
    const newIndex =
      (currentSlide + direction + slidesData.length) % slidesData.length;
    setCurrentSlide(newIndex);
  };

  return (
    <div className={"font-sans h-screen text-white"}>
      {/*@ts-ignore*/}
      <Slide slideData={slidesData[currentSlide]} />

      {currentSlide > 0 && (
        <NavigationButton direction="left" onClick={() => changeSlide(-1)} />
      )}
      {currentSlide + 1 < slidesData.length && (
        <NavigationButton direction="right" onClick={() => changeSlide(1)} />
      )}
    </div>
  );
}
