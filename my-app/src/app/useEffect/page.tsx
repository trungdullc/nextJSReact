"use client";                     
import {useState, useEffect} from "react";                                            // useEffect()

export default function Page() {
    const [advice, setAdvice] = useState("");
    let [counter, setCounter] = useState(0);

    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
        setCounter((count) => count + 1);
    }

    // fx, dependency array
    useEffect( function() {
        getAdvice();
    }, []);

    return (
        <div>
            <button onClick={getAdvice}>Get advice</button>
            <p> {advice} </p>
            <div> Counter: {counter} </div>
        </div>
    );
}