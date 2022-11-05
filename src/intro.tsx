import React, { useRef } from "react";
import SecondPage from "./secondPage";
import "./styling/firstPage.css";
import './styling/secondPage.css'

function IntroPage(): JSX.Element {
  const sRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    sRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div id="firstPage">
        <h1 id="greet">Hi, I'm Alex</h1>
        <h2 id="role">Software Developer</h2>
        <button onClick={ handleClick} id="arrowDown"></button>
      </div>
      <div ref={sRef} id="secondPage"></div>
    </>
  );
}

export default IntroPage;
