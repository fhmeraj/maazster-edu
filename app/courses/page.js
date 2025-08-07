import React from "react";
import Navbar from "@/app/navbar/page";
import { FaGears } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { VscGraph } from "react-icons/vsc";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPencil } from "react-icons/fa6";
import { BsFillCupHotFill } from "react-icons/bs";

export const metadata = {
  title: "Maazster Edu : Courses",
  description: "this is course page",
  auther: [{ name: "Maazster" }, { name: "Maazster edu" }],
  keywords: ["nextjs", "reactjs"],
};

const courses = [
  {
    icon:<FaGears />,
    title: "Full Stack Development",
    description: "Learn MERN stack with real-world projects.",
    duration: "3 Months",
  },
  {
    title: "AI & Machine Learning",
    icon:<IoCodeSlash />,
    description:
      "Master neural networks, deep learning, and real-world AI applications. Hands-on projects and the latest tools included.",
    duration: "3 Months",
  },
  {
    title: "Digital Marketing",
    icon:<VscGraph />,
    description: "SEO, SEM, Social Media & more.",
    duration: "3 Months",
  },
  {
    title: "Data Analyst with AI",
    icon:<HiSpeakerphone />,
    description:
      "cleaning, visualization, and predictive analytics. Real datasets and industry tools..",
    duration: "3 Months",
  },
  {
    title: "Java Full Stack with AI",
    icon:<FaPencil />,
    description:
      "Build robust Java applications with integrated AI features. Learn Spring, Hibernate, REST, and AI-powered tools for modern development.",
    duration: "3 Months",
  },
  {
    title: "Data Structures & Algorithms",
    icon:<BsFillCupHotFill />,
    description: "DSA for coding interviews using C++/Java.",
    duration: "4 Months",
  },
];

const Courses = () => {
  return (
    <div className=" py-9">
      <Navbar />
      <section id="courses" className="py-12  bg-pink-50">
        <div className="w-full mx-auto  text-center">
          <h2 className="text-3xl font-bold mb-8">OUR COURSES</h2>
          <div className=" text-2xl mb-6">
            Explore our range of professional offerings designed to boost your
            skills and career
          </div>

          <div className='w-full h-full flex flex-wrap items-center justify-center  '>

            {courses.map((course, index)=>(
              <div className='w-[280px] h-[350px]  flex flex-col  items-center justify-center rounded-3xl shadow-2xl  hover:scale-110 duration-500 group  hover:bg-orange-500 group-hover:text-white m-3 '>
                <div className='flex flex-col items-center justify-center space-y-8  text-center'> 
                  <i className=" text-6xl text-orange-500 group-hover:text-white">{course.icon}</i>
                  <h1 className='text-xl font-extrabold text-blue-500 group-hover:text-white '>{course.title}</h1>
                  <p className='text-[15px] text-black group-hover:text-white mx-4'>{course.description}</p>
                  <span className='text-[15px] text-gray-500 group-hover:text-white '>Duration: {course.duration}</span>
                </div>
         

        </div>
      ))}
      </div>






        </div>
      </section>
    </div>
  );
};

export default Courses;
