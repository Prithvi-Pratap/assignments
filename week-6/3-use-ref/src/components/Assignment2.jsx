import React, { useState, useCallback,useRef } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const [count,setCount] = useState(0);

    const numberOfRendered=useRef(0);// useRef creates a mutable object with current property,  it means that useRef allows you to hold onto values that may change over time (mutable values) without triggering unnecessary re-renders of your component.
    
    console.log("re-render");

    const handleReRender = useCallback(() => {
        setCount(prev=>prev+1);
    },[]);

    numberOfRendered.current=numberOfRendered.current + 1;

    return (
        <div>
            <p>This component has rendered {numberOfRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};


//few take aways from this assignment :
//1.the useRef() can be used to store a reference to dom elements
//2.the useRef() can be also be used to store numbers or whatever you want to store , and it only renders once the component mount , it doesn't change its value to intial value in every render . it persists till the lifetime of the component.
//3. useRef() returns a mutable object with the 'current' property.