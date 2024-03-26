import { useRef } from "react";
import { useEffect } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {

    const textInput = useRef();

    useEffect(() => {
        textInput.current.focus();
        
    }, []);
    
    //focus and select the text input
    const handleButtonClick = () => {
        textInput.current.focus();
        textInput.current.select();

    };

    return (
        <div>
            <input ref={textInput} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
};

//few take aways from this assignment :
//1.the useRef() can be used to store a reference to dom elements
//2.the useRef() can be also be used to store numbers or whatever you want to store , and it only renders once the component mount , it doesn't change its value to intial value in every render