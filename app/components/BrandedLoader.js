"use client";
import Image from "next/image";
import logo from "@/app/common/logo.png";

const BrandedLoader = ({ message = "Loading..." }) => {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center z-50">
            <div className="text-center">
                {/* Logo */}
                <div className="mb-8 animate-pulse">
                    <Image
                        src={logo}
                        width={200}
                        height={60}
                        alt="Maazster Logo"
                        className="mx-auto"
                    />
                </div>

                {/* Main Spinner */}
                <div className="relative mb-6">
                    <div className="w-20 h-20 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin mx-auto"></div>
                    <div className="w-16 h-16 border-4 border-orange-100 border-t-orange-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                    <div className="w-12 h-12 border-4 border-orange-50 border-t-orange-300 rounded-full animate-spin absolute top-4 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Loading text */}
                <div className="text-gray-700 font-semibold text-lg mb-4">
                    <div className="animate-pulse">{message}</div>
                </div>

                {/* Progress bar */}
                <div className="w-64 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full animate-pulse"></div>
                </div>

                {/* Dots animation */}
                <div className="flex justify-center space-x-2 mt-6">
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-3 h-3 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>

                {/* Subtitle */}
                <p className="text-gray-500 text-sm mt-4 animate-pulse">
                    Preparing your learning experience...
                </p>
            </div>
        </div>
    );
};

export default BrandedLoader;