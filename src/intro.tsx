import { useRef } from "react";
import SecondPage from "./secondPage";
import "./styling/firstPage.css";
import './styling/secondPage.css'
import ThirdPage from "./thirdPage";

function IntroPage(): JSX.Element {
  const sRef = useRef<HTMLDivElement>(null);
  const fRef = useRef<HTMLDivElement>(null);
  const lRef = useRef<HTMLDivElement>(null);
  return (
   <>
   
      <div ref={fRef} id="firstPage">
        <h1 id="greet">Hi, I'm Alex</h1>
        <h2 id="role">Software Developer</h2>
        <button onClick={() => sRef.current?.scrollIntoView({ behavior: "smooth" })} id="arrowDown"></button>
      </div>
      <div ref={sRef} id="secondPage">
     
        <SecondPage/>
        
      </div>
      <div ref={lRef} id="thirdPage">
    
      <ThirdPage/> 
      </div>
   </>
    
   
  );
}

export default IntroPage;
