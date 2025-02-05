"use client";
import { useState } from "react"; // useState()

export default function Page() {
  const [advice, setAdvice] = useState("");
  let [counter, setCounter] = useState(0);

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCounter((count) => count + 1);
  }

  // passing parameters to Message
  return (
    <div>
      <button onClick={getAdvice}>Get advice</button>
      <p> {advice} </p>
      <Message count={counter} />
    </div>
  );
}

interface MessageProps {
  count: number;
}

function Message(props: MessageProps) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
