"use client";
import { useState, useEffect } from 'react';
import Loader from './Loader';

const LoadingWrapper = ({ children, delay = 1000 }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    if (isLoading) {
        return <Loader />;
    }

    return children;
};

export default LoadingWrapper;