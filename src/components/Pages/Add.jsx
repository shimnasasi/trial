import React, { useEffect, useState } from "react";

const Add = () => {
  const [adv, setAdv] = useState("get");
  const [count, setCount] = useState(1);
  useEffect(
    () => {
      getadv();
    },
    [count]
  );
  async function getadv() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const json = await data.json();
    setAdv(json.slip.advice);
    console.log(adv)
  }
  return (
    <div>
      {adv}
      <h1>
        {count}
      </h1>
      
      <button onClick={getadv}>next</button>
    </div>
  );
};

export default Add;
