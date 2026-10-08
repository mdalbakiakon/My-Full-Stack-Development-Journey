"use client";

import { useState } from "react";
import type { CounterState, Step } from "@/types/counter";
import { INIT_VAL } from "@/lib/counter";
import { countUp, countDown, countReset, changeStep } from "@/lib/counter";
import { Button } from "../ui/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

const INIT_STEP: Step = 1;
const ICON_STROK: number = 3;

export function Counter() {
    const [counter, setCounter] = useState<CounterState>({
        value: INIT_VAL,
        step: INIT_STEP,
    });

    const [step, setStep] = useState<Step>(INIT_STEP);

    function handleCountUp() {
        setCounter((current) => countUp(current));
    }

    function handleCountDown() {
        setCounter((current) => countDown(current));
    }

    function handleReset() {
        setCounter((current) => countReset(current));
    }

    function handleStepChange(step: Step) {
        setStep(step);
        setCounter((current) => changeStep(current, step));
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-between items-center gap-(--gap)">
                <Button 
                className={step !== 1 ? "opacity-35" : ""} 
                onClick={() => handleStepChange(1)}>+1</Button>
                
                <Button 
                className={step !== 5 ? "opacity-35" : ""}  
                onClick={() => handleStepChange(5)}>+5</Button>
                
                <Button 
                className={step !== 10 ? "opacity-35" : ""} 
                onClick={() => handleStepChange(10)}>+10</Button>
                
                <Button onClick={handleReset}>Reset</Button>
            </div>
            <h1 className="text-8xl p-5 font-extrabold tracking-tight my-5">{counter.value}</h1>

            {/* counter btns */}
            <div className="flex flex-col justify-center items-center relative z-0">

                {/* btn count up */}
                <Button variant="counting" size="cr" shape="circle"
                    className="2.5"
                    onClick={handleCountUp}>
                    <ChevronUp className="text-(--icon-col) w-45 h-45" strokeWidth={ICON_STROK} />
                </Button>

                {/* btn count down */}
                <Button variant="counting" size="cr" shape="circle" className="absolute left-1/2 -translate-x-1/2 border-7 border-background -bottom-6.75 z-10" onClick={handleCountDown}>
                    <ChevronDown className="text-(--icon-col) w-13.5 h-13.5" strokeWidth={ICON_STROK} />
                </Button>
            </div>
        </div>
    );
}
