# react-playground
Simple react Apps, to improve my frontend skills
Learning react from scratch


The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
  <h1>I've rendered {count} times!</h1>;
  )
}
