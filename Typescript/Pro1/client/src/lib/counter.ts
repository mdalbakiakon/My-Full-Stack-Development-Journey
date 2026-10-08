import type { CounterState } from "@/types/counter";
import type { Step } from "@/types/counter";

const MIN_VAL: number = 0;
const MAX_VAL: number = 100;
export const INIT_VAL: number = 0;

// increase +
export function countUp(counter: CounterState): CounterState {
    const copy = {...counter};
    copy.value = Math.min(MAX_VAL, counter.value + counter.step);
    return copy;
}

// decrease -
export function countDown(counter: CounterState): CounterState {
    const copy = {...counter};
    copy.value = Math.max(MIN_VAL, counter.value - counter.step);
    return copy;
}


// reset
export function countReset(counter: CounterState): CounterState {
    const copy = {...counter};
    copy.value = INIT_VAL;
    return copy;
}


// step changer
export function changeStep(counter: CounterState, step: Step): CounterState {
  const copy = { ...counter };
  copy.step = step;
  return copy;
}
