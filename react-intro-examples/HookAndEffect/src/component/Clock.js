import React, { useEffect, useState } from "react";

export default function Clock() {
  const [clock, setClock] = useState(new Date());

  // Creating our effect to update our clock
  useEffect(() => {
    // After the first render I need to update my clock every second
    // so I set a regular interval to call the setClock function every one second
    // the browser will keep calling setClock until a clearInterval function is called
    const tick = setInterval(() => {
      setClock(new Date());
    }, 1000);

    // The clearInterval function has to be called when the component is unmounted
    // this is possible by returning a function that does call the clearInterval function
    return () => {
      clearInterval(tick);
    };
  });

  return <h1>It's {clock.toLocaleTimeString()} ⏰</h1>;
}
