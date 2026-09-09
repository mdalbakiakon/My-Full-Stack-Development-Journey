import React from "react";
import { useCounter } from "../contexts/CounterContext";

const DisplayCount = () => {
  const { count } = useCounter();
  return <div>{count}</div>;
};

export default DisplayCount;
