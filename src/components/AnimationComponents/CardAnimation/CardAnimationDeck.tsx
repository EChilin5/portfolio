import React, { useEffect, useState, useRef, useCallback } from "react";
import "./CardAnimationDeck.scss";
import OriginalCard from "../../OriginalCard";
import tio from "../../../image/tio.png";
import chillcalories from "../../../image/ChillCalories.png";
import appointment from "../../../image/appoinment.jpg";
import zotes from "../../../image/zotes.png";

// Throttle function to limit the frequency of function execution
const throttle = <T extends unknown[]>(
  callback: (...args: T) => void,
  limit: number
) => {
  let waiting = false;
  return (...args: T) => {
    if (!waiting) {
      callback(...args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

function CardAnimationDeck() {
  // Refs
  const divRef = useRef<HTMLDivElement>(null);
  const cardPositionRef = useRef(0);
  const prevScrollTop = useRef(0);
  const openIntervalRef = useRef<number | null>(null);
  const closeIntervalRef = useRef<number | null>(null);

  // States
  const [isRotate10, setIsRotate10] = useState(false);
  const [hover, setHover] = useState(false);

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

  // trigger to rotate the cards
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);
  const [activeSection, setActiveSection] = useState<
    "none" | "increment" | "decrement"
  >("none");

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

  const incrementCardsPosition = () => {
    setBaseZotes((prev) => prev + 0.5);
    setLevel1Appointments((prev) => prev + 0.6);
    setLevel2Calories((prev) => prev + 0.8);
    setLevel3Tio((prev) => prev + 0.9);
  };

  const decrementCardValues = () => {
    setBaseZotes((prev) => prev - 0.5);
    setLevel1Appointments((prev) => prev - 0.6);
    setLevel2Calories((prev) => prev - 0.8);
    setLevel3Tio((prev) => prev - 0.9);
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
    screenWidth: number
  ) => {
    const percentage1 = (value1 / screenWidth) * 100;
    const percentage2 = (value2 / screenWidth) * 100;
    const percentage3 = (value3 / screenWidth) * 100;
    const percentage4 = (value4 / screenWidth) * 100;

    setCardXValues(percentage1, percentage2, percentage3, percentage4);
  };

  const setCardLevels = (position: number, screenWidth: number) => {
    if (position > 25) {
      setBaseZotes(10);
      setLevel1Appointments(10);
      setLevel2Calories(10);
      setLevel3Tio(10);
    }
    if (position >= 25 && position < 45) {
      setCardXValuesPercentage(40, 25, -25, 40, screenWidth);
    } else if (position >= 45 && position < 55) {
      setCardXValuesPercentage(800, 400, -400, -800, screenWidth);
    } else if (position >= 55 && position < 60) {
      setCardXValuesPercentage(900, 450, -550, -900, screenWidth);
    } else if (position >= 60) {
      setCardXValuesPercentage(7500, 2500, -2500, -7500, screenWidth);
    }
  };

  const updateCardsPosition = useCallback(
    (position: number) => {
      const screenWidth = window.innerWidth;
      if (position <= 10) {
        setIsRotate10(false);
        resetCardsPosition();
      } else if (position > 10 && position <= 25) {
        isRotate10 ? decrementCardValues() : incrementCardsPosition();
        setHover(false);
      } else if (position > 25) {
        setHover(true);
        setIsRotate10(true);
        setCardLevels(position, screenWidth);
      }
    },
    [isRotate10]
  );

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

  const updateScreenPixels = useCallback(
    (isIncreasing: boolean) => {
      let newValue = cardPositionRef.current;
      if (isIncreasing) {
        newValue = Math.min(newValue + 3, 100);
      } else {
        newValue = Math.max(newValue - 3, 0);
      }
      cardPositionRef.current = newValue;
      updateCardsPosition(newValue);
      updateTriggers(newValue);
      updateRotations(newValue);
    },
    [updateCardsPosition, updateTriggers, updateRotations]
  );

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    const isScrollingDown = scrollTop > prevScrollTop.current;
    const isScrollingUp = scrollTop < prevScrollTop.current;
    prevScrollTop.current = scrollTop;

    if (scrolled <= 10) resetCardsPosition();

    if (scrolled > 30) {
      if (isScrollingDown && activeSection !== "increment") {
        if (openIntervalRef.current) clearInterval(openIntervalRef.current);
        if (closeIntervalRef.current) clearInterval(closeIntervalRef.current);
        openIntervalRef.current = window.setInterval(
          () => updateScreenPixels(true),
          100
        );
        setActiveSection("increment");
      } else if (
        isScrollingUp &&
        activeSection !== "decrement" &&
        scrolled < 45
      ) {
        if (closeIntervalRef.current) clearInterval(closeIntervalRef.current);
        if (openIntervalRef.current) clearInterval(openIntervalRef.current);
        closeIntervalRef.current = window.setInterval(
          () => updateScreenPixels(false),
          100
        );
        setActiveSection("decrement");
      }
    }
  }, [activeSection, updateScreenPixels]);

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      if (openIntervalRef.current) clearInterval(openIntervalRef.current);
      if (closeIntervalRef.current) clearInterval(closeIntervalRef.current);
    };
  }, []);

  // Handle scroll event
  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 80);
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [handleScroll]);

  return (
    <div ref={divRef} className="card-deck-center">
      <div className="card-deck-content">
        <div
          key={0}
          className="card-level-base"
          style={{
            transform: `translate3d(${zotesCardX}px, 0px, 0px) rotate(${levelbaseZotes}deg)`,
            transition: `transform 1s ease`,
          }}
        >
          <OriginalCard
            image={zotes}
            title="Zotes Shop Demo"
            description="Sample Ecommerce shop to view and buy items"
            url="https://play.google.com/store/apps/details?id=com.eachilin.zotes"
            gitUrl="https://github.com/EChilin5/Zotes_OCR"
            option="Android"
          />
        </div>
        <div
          key={1}
          className="card-level-1"
          style={{
            transform: `translate3d(${appointmentCardX}px, 0px, 0px) rotate(${level1Appointments}deg)`,
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
            transform: `translate3d(${caloriesCardX}px, 0px, 0px) rotate(${level2Calories}deg)`,
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
            transform: `translate3d(${tioCardX}px, 0px, 0px) rotate(${level3Tio}deg)`,
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
