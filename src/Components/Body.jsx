import React from "react";
import "../index.css";
import BodyInfo from "./ComponentForBodyInfo";
import MapBody from "./ComponentForMapBody";
import PeopleCount from "./ComponentForPeopleCount";
import Night from "./ComponentForNight";
import PeopleCountWithNight from "./ComponentForPeopleCountWithNight";
import PeopleRooms from "./ComponentForPeopleRooms";
import BathRoom from "./ComponentForBathroom";
import Pool from "./ComponentForPool";
import AdvantagesMain from "./Advantages";
import Houses from "./ComponentHouses";
import Options from "./OptionsComponent";
import PagesImg from "./ComponentPages";
import CourseInputsAndPrace from "./ComponentForCourseInputsAndPrace";
import useBodyLogic from "./ComponentBodyLogic";
function Body() {
  const {
    count,
    countWithNight,
    delivery,
    handleIncrement,
    handleDecrement,
    handleIncrementForNight,
    handleDecrementForNight,
  } = useBodyLogic();

  return (
    <>
      <MapBody />
      <div className="flex">
        <div className="p-4 border-2 border-[rgb(196,193,193)] border-solid w-80 h-[1770px] ml-14 -mt-12 rounded-2xl">
          <BodyInfo />
          <CourseInputsAndPrace />
          <PeopleCount
            count={count}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
          <Night />
          <PeopleCountWithNight
            countWithNight={countWithNight}
            onIncrement={handleIncrementForNight}
            onDecrement={handleDecrementForNight}
            delivery={delivery}
          />
          <PeopleRooms />
          <BathRoom />
          <Pool />
          <AdvantagesMain />
        </div>
        <Houses />
        <PagesImg />
        <Options />
      </div>
    </>
  );
}

export default Body;
