import React from "react";
import { useParams } from "react-router-dom";

export const Number = (props) => {
    const { number } = useParams();

    if (isNaN(number)) {
        return <p>The word is: {number}</p>;
    }

    return <p>The number is {number}</p>;
};

export default Number;