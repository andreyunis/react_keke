import {useState} from "react"

function Maruchan() {
    const [count, setCount] = useState(0);
    console.log("render");
    return (
        <div>
            <h1>
                Baby Maruchan
            </h1>
            <p>
                greeting Maruchan baby
            </p>
            <button onClick={() => {setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Maruchan