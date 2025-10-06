"use client";
import useCountdown from '../hooks/useCountdown';
import Navbar from '../navbar/page';
import { getLaunchDate } from '../common/launchDate';

const ComingSoon = ({ title = "Coming Soon", subtitle = "", feature = "DEFAULT" }) => {
    // Get the specific launch date for this feature
    // This ensures the countdown doesn't reset on page refresh
    const targetDate = getLaunchDate(feature);
    const timeLeft = useCountdown(targetDate);

    const CountdownCard = ({ value, label }) => (
        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-300 border border-orange-100">
            <div className="text-xl sm:text-2xl md:text-4xl font-bold text-orange-500 mb-1 md:mb-2">
                {value.toString().padStart(2, '0')}
            </div>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium uppercase tracking-wide">
                {label}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
            <Navbar />

            <div className="pt-24 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                            {title}
                        </h1>
                        {subtitle && (
                            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
                                {subtitle}
                            </h2>
                        )}
                        <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                            Launching In
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto">
                            <CountdownCard value={timeLeft.days} label="Days" />
                            <CountdownCard value={timeLeft.hours} label="Hours" />
                            <CountdownCard value={timeLeft.minutes} label="Minutes" />
                            <CountdownCard value={timeLeft.seconds} label="Seconds" />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-3xl mx-auto">
                        <div className="text-4xl sm:text-6xl md:text-8xl mb-4 md:mb-6">🚀</div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
                            We&apos;re Working Hard!
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                            In the meantime, Stay tuned. We are almost ready to launch.
                        </p>

                        {/* Features Preview */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-6 md:mt-8">
                            <div className="p-3 sm:p-4 bg-orange-50 rounded-lg text-center sm:text-left">
                                <div className="text-xl sm:text-2xl mb-2">📚</div>
                                <div className="font-semibold text-gray-700 text-sm sm:text-base">Quality Content</div>
                            </div>
                            <div className="p-3 sm:p-4 bg-orange-50 rounded-lg text-center sm:text-left">
                                <div className="text-xl sm:text-2xl mb-2">🎯</div>
                                <div className="font-semibold text-gray-700 text-sm sm:text-base">Expert Guidance</div>
                            </div>
                            <div className="p-3 sm:p-4 bg-orange-50 rounded-lg text-center sm:text-left">
                                <div className="text-xl sm:text-2xl mb-2">⚡</div>
                                <div className="font-semibold text-gray-700 text-sm sm:text-base">Fast Updates</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 md:mt-12 text-center">
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            Have questions? Get in touch with us!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto">
                            <a
                                href="tel:+919214588441"
                                className="w-full sm:w-auto bg-orange-500 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                            >
                                📞 Call: +91 9214588441
                            </a>
                            <a
                                href="mailto:info@maazsteredu.com"
                                className="w-full sm:w-auto bg-gray-800 text-white px-4 sm:px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                            >
                                ✉️ Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;