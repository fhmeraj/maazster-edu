import Image from "next/image";
import Navbar from "@/app/navbar/page";
import Courses from "@/app/courses/page";
import Plans from "@/app/plans/page";
import Banner from "@/app/common/banner.png";
import Testimonials from "@/app/testimonials/page";
import { FaUserGroup } from "react-icons/fa6";
import { ChevronsLeftRightEllipsis } from "lucide-react";
import BannerSection from "./banner";
import Journey from "./Journey";


export default function Home() {
  return (
    <div className="no-scrollbar overflow-auto pt-24">
      <Navbar />
      <div className=" flex mt-20 ">
        <div className="w-[50%] relative h-[350px] text-center text-2xl  ">

        <img className="absolute -z-10  h-[300px]  bottom-0" src="https://maazstertech.in/assets/images/banner-left-dec.png"/>
        <p className="text-gray-400 mt-10">Welcome to our EduLab </p>
          <br />
          <h1 className="text-5xl font-bold mb-5">Best Place To Learn</h1>
          <span className=" text-3xl font-bold animate-pulse text-orange-500">
             MERN Full Stack with AI Join Us Now!
          </span>
          <br />          
          <button className=" text-2xl text-orange-100 rounded-md w-[150px] h-[40px] bg-orange-400 border-black mt-5">
            Join Now
          </button>
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
      
      

      
      <Journey /> 


      <section className="mt-16">
        <Courses />
        <Plans />
        <BannerSection/>
        <Testimonials />
        {/* other sections */}
      </section>
    <footer className="w-full h-16 bg-white flex flex-col items-center justify-center ">
    <p className=" text-xs">© 2025 Maazster Tech GENX PVT LTD.</p>
    <p className=" text-xs">All Rights Reserved.</p>
    <p className="text-orange-400 text-s">Powered By Maazstertech.com</p></footer>  
    </div>
  );
}
