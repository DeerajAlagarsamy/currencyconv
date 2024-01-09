// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useState, useEffect } from "react";

export default function App() {
  const [rate, setRate] = useState(0);
  const [convertFrom, setConvertFrom] = useState("");
  const [convertTO, setconvertTO] = useState("");
  const [OUTPUT, setOutput] = useState("OUTPUT");

  useEffect(
    function () {
      async function apifetch() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${rate}&from=${convertFrom}&to=${convertTO}`
        );
        const data = await res.json();
        console.log(data);
        const output = await data.rates[convertTO];
        setOutput(output);
      }
      {
        rate && apifetch();
      }
    },
    [rate, convertFrom, convertTO]
  );

  return (
    <div>
      <input type="text" onChange={(e) => setRate(Number(e.target.value))} />
      <select onChange={(e) => setConvertFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setconvertTO(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{OUTPUT === "OUTPUT" ? `${OUTPUT}` : ` ${OUTPUT} ${convertTO}`}</p>
    </div>
  );
}
