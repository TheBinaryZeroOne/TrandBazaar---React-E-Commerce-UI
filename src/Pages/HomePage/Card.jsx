import React from "react";
import { Tilt } from "react-tilt";

const Card = ({ image, desc }) => {
    const defaultOptions = {
        reverse: true,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    };

    return (
        <>
            <Tilt
                options={defaultOptions}
                style={{
                    height: "34.3vh",
                    width: "25vw",
                    backgroundColor: "white",
                    border: "2px solid black",
                }}
            >
                <div>
                    <div >
                        <img src={image} className="w-full h-full object-cover object-center absolute opacity-60" />
                        <div className="text-center text-white absolute">{desc}</div>
                    </div>
                </div>
            </Tilt>
        </>
    );
};

export default Card;
