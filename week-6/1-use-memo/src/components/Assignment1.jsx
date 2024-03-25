import { useMemo } from "react";
import { useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
    const [input, setInput] = useState(0);
    // Your solution starts here

    function factorial(num){
        if(num==1 || num==0)
        return 1;
        let fact=1;
        for(let i=2;i<=num;i++){
            fact*=i;
        }
        return fact;
    }

    const expensiveValue = useMemo(()=>factorial(input),[input]);// always pass the callback to usememo( u will save time in unnecessarily debugging)

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}