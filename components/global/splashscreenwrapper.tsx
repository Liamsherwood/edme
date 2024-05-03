"use client";

import React, { useState, useEffect, ReactNode, useContext } from 'react';
import SplashScreen from './splashscreen';
import { AnimationContext } from './animation';

interface SplashScreenWrapperProps {
    children: ReactNode;
}

const SplashScreenWrapper: React.FC<SplashScreenWrapperProps> = ({ children }) => {
    const [isAnimationFinished, setIsAnimationFinished] = useState(false);

    return (
        <AnimationContext.Provider value={{ isAnimationFinished, setIsAnimationFinished }}>
            {isAnimationFinished ? children : <SplashScreen />}
        </AnimationContext.Provider>
    );
};

export default SplashScreenWrapper;