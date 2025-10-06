"use client";

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
            <div className="text-center">
                {/* Spinner */}
                <div className="relative">
                    <div className="w-16 h-16 border-4 border-gray-200 border-t-orange-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <div className="w-12 h-12 border-4 border-gray-100 border-t-orange-400 rounded-full animate-spin absolute top-2 left-1/2 transform -translate-x-1/2"></div>
                </div>

                {/* Loading text */}
                <div className="text-gray-600 font-medium">
                    <div className="animate-pulse">Loading...</div>
                </div>

                {/* Dots animation */}
                <div className="flex justify-center space-x-1 mt-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;