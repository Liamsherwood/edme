"use client";

import dynamic from 'next/dynamic';
const Logo = dynamic(() => import('@/components/global/animation'), { ssr: false });
import React, { useEffect, useState, useContext} from 'react';
import { usePathname } from 'next/navigation';
import { AnimationContext } from '@/components/global/animation';

const SplashScreen: React.FC = () => {
    const [active, setActive] = useState(false)
    const pathname = usePathname();
    const { isAnimationFinished } = useContext(AnimationContext);
    
    useEffect(() => {
        if (pathname === '/' && !isAnimationFinished) {
            setTimeout(() => {
                setActive(true)
            }, 0)
        } else {
            setActive(true);
        }
    }, [pathname, isAnimationFinished]);

    return active ? (
        <div className="splash-screen top-0 bottom-0 fixed w-full flex justify-center items-center">
            <Logo />
        </div>
    ) : null;
};

export default SplashScreen;