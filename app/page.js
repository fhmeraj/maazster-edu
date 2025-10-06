import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import TestimonialsSection from "@/app/common/TestimonialsSection";
import TypedAnimation from "@/app/components/TypedAnimation";
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import BannerSection from "./banner";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section - Mobile Optimized */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50 pt-16 md:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-20">
            {/* Left Content - Mobile First */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-4 md:space-y-6 order-2 lg:order-1">
              <p className="text-orange-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide uppercase">
                Welcome to our EduLab
              </p>

              <div className="space-y-2 md:space-y-4">
                <h1 className=" select-none text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-gray-900 leading-tight">
                  Best Place To Learn
                </h1>

                <div className="mt-3 md:mt-6">
                  <TypedAnimation />
                </div>
              </div>

              <p className="select-none text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0">
                Transform your career with cutting-edge technology education.
                Master MERN Stack, AI, and modern web development with industry
                experts.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start pt-4 md:pt-6 px-4 lg:px-0">
                <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm md:text-base lg:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <Link href={PATH.COURSES}> Start Learning Now</Link>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>

                <button className="group border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-sm md:text-base lg:text-lg font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <Link href={PATH.PROJECTS}> Watch Demo</Link>
                  </span>
                </button>
              </div>
            </div>

        <div className="   w-[50%] flex justify-center">

        <div className="relative  flex  justify-center mb-20">
        <img className="h-[300px]" src="https://maazstertech.in/assets/images/banner-right-dec.png"/>
  <Image
            src={Banner}
            alt="banner"
            object-contain
            className="w-[300px] h-[520px] absolute top-1"
            loading="lazy"
          />
        </div>
          {/* <Image
            src={Banner}
            alt="banner"
            object-contain
            className="w-[300px] h-[520px]"
            loading="lazy"
          /> */}
        </div>       
      </div>
      <div className="flex flex-col items-center justify-center mt-52">
        <h1 className="text-3xl font-bold flex ">
          Empowering Your Learning Journey
        </h1>
        Explore the different ways I can help you learn and grow in tech
      </div>

      {/* card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mt-12 ">
        {/* <!-- Card 1 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2">Online Live Classes</h3>
          <p className="">
            Interactive online sessions with real-time Q&A and project-based
            learning, accessible from anywhere.
          </p>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2 ">
            <span>
              <FaUserGroup />
            </span>
            In-Person Workshops
          </h3>
          <p className="">
            Hands-on workshops designed to provide practical experience and
            collaborative learning in a classroom setting.
          </p>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white ">
          <h3 className="text-xl font-semibold mb-2 ">1-on-1 Mentorship</h3>
          <p className="">
            Personalized guidance and support tailored to your learning goals,
            with direct feedback and career advice.
          </p>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="bg-white rounded-3xl shadow-2xl p-6  hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white">
          <h3 className="text-xl font-semibold mb-2">
            <span>
              <ChevronsLeftRightEllipsis />
            </span>
            Custom Course Creation
          </h3>
          <p className="">
            Development of custom courses and learning paths to suit your unique
            needs and interests in technology.
          </p>
        </div>
      </div>
      <section className="mt-16">
        <Courses />
        <Plans />
        <BannerSection/>
        <div className="">
          <div> girl image</div>
          <div> content</div>
        </div>
        <Testimonials />
        {/* other sections */}
      </section>
    </div>
  );
}
