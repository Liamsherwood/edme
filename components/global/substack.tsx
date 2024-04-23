"use client";
import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        CustomSubstackWidget: {
            substackUrl: string;
            placeholder: string;
            buttonText: string;
            theme: string;
            colors: {
                primary: string;
                input: string;
                email: string;
                text: string;
            };
        }
    }
}

const SubstackEmbed = () => {
    const divRef = useRef(null);
    useEffect(() => {
        window.CustomSubstackWidget = {
            substackUrl: "edme.substack.com",
            placeholder: "example@gmail.com",
            buttonText: "Subscribe",
            theme: "custom",
            colors: {
                primary: "#0F61E6",
                input: "#FFFFFC",
                email: "#434343",
                text: "#FFFFFC",
            },
        };
    }, []);
    useEffect(() => {
        if (divRef.current) {        
            const script = document.createElement('script');
            script.src = "https://substackapi.com/widget.js";
            script.async = true;
            script.onload = () => console.log('Substack script loaded');
            script.onerror = () => console.log('Substack script load error');
            document.body.appendChild(script);
            return () => {
                document.body.removeChild(script);
            }
        }
    }, [divRef]);

    return (
        <div id="custom-substack-embed" ref={divRef}></div>
    );
};
export default SubstackEmbed;