"use client";

import dynamic from 'next/dynamic';
const Logo = dynamic(() => import('@/components/global/animation'), { ssr: false });
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const SplashScreen: React.FC = () => {
    const [loading, setLoading] = useState(true)
    const pathname = usePathname();
    
    useEffect(() => {
        if (pathname === '/') {
            setTimeout(() => {
                setLoading(false)
            }, 8000)
        } else {
            setLoading(false);
        }
    }, [pathname]);

    return loading ? (
        <div className="splash-screen top-0 bottom-0 fixed w-full flex justify-center items-center">
            <Logo />
        </div>
    ) : null;
};

export default SplashScreen;