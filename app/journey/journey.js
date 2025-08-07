import React from 'react'
import { IoMdLaptop } from "react-icons/io";
import { TiGroup } from "react-icons/ti";
import { IoPerson } from "react-icons/io5";
import { LuSquarePen } from "react-icons/lu";



const Journey = () => {


  const data=[

    {
      id: 1,
      title: "Online Live Classes",
      icon:<IoMdLaptop />,
      description: "Interactive online sessions with real-time Q&A and project-based learning, accessible from anywhere.",
    },
      {
      id: 2,
      title: "In-Person Workshops",
      icon:<TiGroup />,
      description: "Hands-on workshops designed to provide practical experience and collaborative learning in a classroom setting.",
    },
      {
      id: 3,
      title: "1-on-1 Mentorship",
      icon:<IoPerson />,
      description: "Personalized guidance and support tailored to your learning goals, with direct feedback and career advice.",
    },
    {
      id: 4,
      title: "Custom Course Creation",
      icon: <LuSquarePen />,
      description: "Development of custom courses and learning paths to suit your unique needs and interests in technology.",
    },
  ]
  return (
    <div className='w-full h-[65vh] '>
        
        <div className='w-full h-[100%] flex items-center justify-center'>
        {data.map((i)=>(
          <div className=' w-[300px] h-[300px] flex flex-col items-center justify-center m-4 rounded-3xl shadow-2xl  hover:scale-110 duration-500 group  hover:bg-orange-500 group-hover:text-white  '>

            <div className='flex flex-col items-center justify-center space-y-4 text-center'>

              <i className=" text-4xl text-orange-500 group-hover:text-white">{i.icon}</i>
              <h1 className='text-xl font-extrabold text-blue-500 group-hover:text-white '>{i.title}
              </h1>
              <p className='text-[15px] text-gray-500 group-hover:text-white mx-4'>{i.description}
              </p>

            </div>
          </div>

          ))}
        </div>
    </div>
    
  )
}

export default Journey
