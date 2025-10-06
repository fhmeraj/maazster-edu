"use client";
import { useState, useEffect } from 'react';
import BrandedLoader from './BrandedLoader';

const PageWithLoader = ({ children, loadingMessage = "Loading...", delay = 1500 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    if (isLoading) {
        return <BrandedLoader message={loadingMessage} />;
    }

    return <>{children}</>;
};

export default PageWithLoader;