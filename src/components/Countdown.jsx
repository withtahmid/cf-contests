import { useEffect, useState } from "react";
import { getTimeRemaining } from "../utils/arrange";
export default function Countdown({ endTime }){
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining(endTime));
    useEffect(()=>{
        const intervalId = setInterval(()=> setTimeLeft(getTimeRemaining(endTime)), 1000);
        return () => clearInterval(intervalId);
    }, [])
    return (
        <div className="grid grid-flow-col gap-2 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-2xl ">
            <span style={{"--value":timeLeft.days}}></span>
          </span>
          {/* days */}
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-2xl ">
            <span style={{"--value":timeLeft.hours}}></span>
          </span>
          {/* hours */}
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-2xl ">
            <span style={{"--value":timeLeft.minutes}}></span>
          </span>
          {/* min */}
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-2xl ">
            <span style={{"--value":timeLeft.seconds}}></span>
          </span>
          {/* sec */}
        </div>
      </div>
    )
}