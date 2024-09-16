import React, { useEffect, useState, useRef, useCallback } from "react";
import { useScroll } from "framer-motion";
import "./CardAnimationDeck.scss";
import OriginalCard from "../../OriginalCard";
import tio from "../../../image/tio.png";
import chillcalories from "../../../image/ChillCalories.png";
import appointment from "../../../image/appoinment.jpg";
import zotes from "../../../image/zotes.png";


function CardAnimationDeck() {
// new content 
 // will target parent div for framer motion this where it will start detecting the scrolling for the cards
 const cardStartingRef = useRef(null);
 const { scrollYProgress } = useScroll({
   // which element we will need to observe
   target: cardStartingRef,
   // gets the start and end of the window
   offset: ["start end", "start start"],
 });


  // Refs
  const openIntervalRef = useRef<number | null>(null);

  // States
  const [isRotate10, setIsRotate10] = useState(false);

  // rotate cards from 0 to 10
  const [levelbaseZotes, setBaseZotes] = useState(0);
  const [level1Appointments, setLevel1Appointments] = useState(0);
  const [level2Calories, setLevel2Calories] = useState(0);
  const [level3Tio, setLevel3Tio] = useState(0);

  // move cards along the x-axis
  const [zotesCardX, setZotesCardX] = useState(0);
  const [appointmentCardX, setAppointmentCardX] = useState(0);
  const [caloriesCardX, setCaloriesCardX] = useState(0);
  const [tioCardX, setTioCardX] = useState(0);
  
  // SET Y LEVELS
  const [cardY, setCardY] = useState(0);

  // trigger to rotate the cards
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
 

  // Helper Functions
  const resetCardsPosition = () => {
    setBaseZotes(0);
    setLevel1Appointments(0);
    setLevel2Calories(0);
    setLevel3Tio(0);
    setZotesCardX(0);
    setAppointmentCardX(0);
    setCaloriesCardX(0);
    setTioCardX(0);
  };

  const incrementCardsPosition = (position: number) => {
    if(position > 3 && position < 6){
    setBaseZotes(0.2);
    setLevel1Appointments(0.5);
    setLevel2Calories(0.7);
    setLevel3Tio(0.9);
  }else  if(position >= 6 && position < 9){
    setBaseZotes(1.5);
    setLevel1Appointments(2.6);
    setLevel2Calories(3.8);
    setLevel3Tio(4.9);
  }else  if(position >= 9 && position < 12){
    setBaseZotes(1.2);
    setLevel1Appointments(6.5);
    setLevel2Calories(7.7);
    setLevel3Tio(6.9);
  }
  };



  const setCardXValues = (
    base: number,
    level1: number,
    level2: number,
    level3: number
  ) => {
    setZotesCardX(base);
    setAppointmentCardX(level1);
    setCaloriesCardX(level2);
    setTioCardX(level3);
  };

  const setCardXValuesPercentage = (
    value1: number,
    value2: number,
    value3: number,
    value4: number,
  ) => {
    const percentage1 = value1;
    const percentage2 = value2
    const percentage3 = value3;
    const percentage4 = value4;

    setCardXValues(percentage1, percentage2, percentage3, percentage4);
  };

  const setCardLevels = (position: number) => {
    if (position > 25) {
      setBaseZotes(10);
      setLevel1Appointments(10);
      setLevel2Calories(10);
      setLevel3Tio(10);
    }
    if (position >= 25 && position < 35) {
      setCardXValuesPercentage(20, 10, -10, -20);
    } else if (position >= 35 && position < 45) {
      setCardXValuesPercentage(30, 20, -20, -30);

    } else if (position >= 45 && position < 50) {
      setCardXValuesPercentage(50, 30, -30, -50);

    } else if (position >= 60) {
      setCardXValuesPercentage(155, 52, -52, -155);
    }
  };

  // const updateYPosition = (position:number)=>{
  //   if(position < 20){
  //     setCardY(0);
  //   }else if(position>= 20 && position < 30){
  //     setCardY(10);
  //   }else if(position>= 30 && position < 40){
  //     setCardY(20);
  //   }else if(position>= 40 && position < 50){
  //     setCardY(30);
  //   }else if(position>= 50 && position < 60){
  //     setCardY(40);
  //   }else if(position>= 60 && position < 70){
  //     setCardY(50);
  //   }else if(position>= 70 && position < 80){
  //     setCardY(60);
  //   }else if(position>= 80 && position < 100){
  //     setCardY(70);
  //   }

  // }

  const updateTriggers = (position: number) => {
    setTrigger3(position > 66);
    setTrigger2(position > 67);
  };

  const updateRotations = (position: number) => {
    if (position > 67) {
      setBaseZotes(0);
      setLevel1Appointments(0);
      setLevel2Calories(0);
      setLevel3Tio(0);
    }
  };



  const handleScroll = useCallback(() => {
    scrollYProgress.on("change", (e) => {
    
      const scrolled = Math.round(e * 100);
      // console.log(scrolled);

      console.log(scrolled)
      if (scrolled <= 10) {
        if (openIntervalRef.current) {
          clearInterval(openIntervalRef.current);
        }
        resetCardsPosition();
      } else {
        if (openIntervalRef.current) {
          clearInterval(openIntervalRef.current);
        }
        openIntervalRef.current = window.setInterval(() => {
          incrementCardsPosition(scrolled)
          setCardLevels(scrolled);
          updateTriggers(scrolled);
          updateRotations(scrolled);
          // updateYPosition(scrolled);
        }, 30);
      }
    });
  }, []);

  // Cleanup intervals on unmount
  useEffect(() => {
    handleScroll();
    return () => {
      if (openIntervalRef.current) {
        clearInterval(openIntervalRef.current);
      }
    };
  }, [handleScroll]);

  // Handle scroll event


  return (
    <div ref={cardStartingRef} className="card-deck-center">
      <div className="card-deck-content">
        <div
          key={0}
          className="card-level-base"
          style={{
            transform: `translate3d(${zotesCardX}%, ${cardY}%, 0px) rotate(${levelbaseZotes}deg)`,
            transition: `transform 1s ease`,
          }}
        >
          <OriginalCard
            image={chillcalories}
            title="Chill Calories"
            description="Help Users reduce their calories and lose weight"
            url="https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en"
            gitUrl="https://github.com/EChilin5/iTV"
            option="Android"
          />
        </div>
        <div
          key={1}
          className="card-level-1"
          style={{
            transform: `translate3d(${appointmentCardX}%, ${cardY}%, 0px) rotate(${level1Appointments}deg)`,
            transition: `transform 1s ease`,
          }}
        >
          <OriginalCard
            image={appointment}
            title="Appointments"
            description="The frontEnd version of the app still in development"
            url="https://appointments-7407b.web.app/"
            gitUrl="https://github.com/EChilin5/appointment"
            option="Web"
          />
        </div>
        <div
          key={2}
          className="card-level-2"
          style={{
            transform: `translate3d(${caloriesCardX}%, ${cardY}%, 0px) rotate(${level2Calories}deg)`,
            transition: `transform 1s ease`,
          }}
        >
          <OriginalCard
            image={chillcalories}
            title="Chill Calories"
            description="Help Users reduce their calories and lose weight"
            url="https://play.google.com/store/apps/details?id=eachillz.dev.itv&hl=en"
            gitUrl="https://github.com/EChilin5/iTV"
            option="Android"
          />
        </div>
        <div
          key={3}
          className="card-level-3"
          style={{
            transform: `translate3d(${tioCardX}%, ${cardY}%, 0px) rotate(${level3Tio}deg)`,
            transition: `transform 1s ease`,
          }}
        >
          <OriginalCard
            image={tio}
            title="TIO CR"
            description="Turn Images into Text with a click of a button"
            url="https://play.google.com/store/apps/details?id=com.eachilin.imagecut&hl=en"
            gitUrl="https://github.com/EChilin5/ImageCut_OCR"
            option="Android"
          />
        </div>
      </div>
    </div>
  );
}

export default CardAnimationDeck;
