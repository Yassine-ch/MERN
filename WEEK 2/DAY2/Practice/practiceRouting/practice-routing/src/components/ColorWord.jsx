import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const ColorWord = (props) => {
    const { word, textColor, bgColor } = useParams();

    if (!isNaN(word)) {
        return <Navigate to={`/${word}`} />;
    }

    const styling = {
        color: textColor,
        backgroundColor: bgColor,
    };

    return (
        <p style={styling}>
            The word is: {word}
        </p>
    );
};

export default ColorWord;