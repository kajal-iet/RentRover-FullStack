import React, { useState } from "react";


const GroupButton = () => {
    const [ counter, setCounter ] = useState(1);

    const handleIncrement = () => {
        setCounter(counter => counter + 1 );
    };

    const handleDecrement = () => {
        setCounter(counter => counter - 1 );
    };

    return (
        <div>
            <button className="btn" onClick={() => handleDecrement()} disabled={counter == 0}>-</button>
            <button disabled>{counter}</button>
            <button className="btn" onClick={() => handleIncrement()}>+</button>
        </div>
    );
}

export default GroupButton;