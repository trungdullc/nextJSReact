"use client";                                                               // marks component as client-side

export default function Page() {
    // fetch advise, convert to json string
    async function getAdvice() {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        // console.log(data);

        const adviceElement = document.getElementById("advice");
        // const adviceElement = document.querySelector("#advice");         // #: id, . is class
        adviceElement.innerText = data.slip.advice;                         // Directly updating DOM
    }

    return (
        <div>
            <h1>Hello Hackers</h1>
            <button onClick={getAdvice}>Get advice</button>
            <p id="advice"></p>
        </div>
    );
}
