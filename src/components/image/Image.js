import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { registerObserver } from "../../helper/interSectionOberserver";


const Image = ({ src, alt, styleClass }) => {
    const [showImage, setShowImage] = useState(false);
    const placeHolderRef = useRef(null);

    useEffect(() => {

        registerObserver(placeHolderRef.current, setShowImage);
    }, []);

    if (showImage) {
        return <img src={src} alt={alt} className={"image-style " + styleClass} />;
    }
    return <span ref={placeHolderRef} className={"image-style " + styleClass} />;
}

export default Image

