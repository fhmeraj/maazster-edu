import React from "react";
import Navbar from "@/app/navbar/page";

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
    description:
      "Master MERN stack (MongoDB, Express, React, Node.js) with real-world projects, deployment, and modern development practices.",
    duration: "3 Months",
    icon: <FaReact className="text-4xl text-blue-500 mb-4" />,
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    projects: 5,
    level: "Beginner to Advanced",
  },
  {
    title: "AI & Machine Learning",
    icon:<IoCodeSlash />,
    description:
      "Master neural networks, deep learning, and real-world AI applications. Hands-on projects with TensorFlow, PyTorch, and industry tools.",
    duration: "4 Months",
    icon: <FaBrain className="text-4xl text-purple-500 mb-4" />,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
    projects: 6,
    level: "Intermediate to Advanced",
  },
  {
    title: "Digital Marketing",
    description: "SEO, SEM, Social Media & more.",
    duration: "3 Months",
    icon: <FaChartLine className="text-4xl text-green-500 mb-4" />,
    technologies: ["Google Ads", "Facebook Ads", "Analytics", "SEO Tools"],
    projects: 4,
    level: "Beginner to Intermediate",
  },
  {
    title: "Data Analyst with AI",
    icon:<HiSpeakerphone />,
    description:
      "Data cleaning, visualization, and predictive analytics using Python, SQL, Tableau. Real datasets and industry-standard tools.",
    duration: "3 Months",
    icon: <FaDatabase className="text-4xl text-indigo-500 mb-4" />,
    technologies: ["Python", "SQL", "Tableau", "Power BI"],
    projects: 5,
    level: "Beginner to Intermediate",
  },
  {
    title: "Java Full Stack with AI",
    icon:<FaPencil />,
    description:
      "Build enterprise Java applications with AI integration. Learn Spring Boot, Hibernate, REST APIs, and AI-powered microservices.",
    duration: "4 Months",
    icon: <FaJava className="text-4xl text-red-500 mb-4" />,
    technologies: ["Java", "Spring Boot", "Hibernate", "AI APIs"],
    projects: 6,
    level: "Intermediate to Advanced",
  },
  {
    title: "Data Structures & Algorithms",
    description: "DSA for coding interviews using C++/Java.",
    duration: "4 Months",
    icon: <FaCode className="text-4xl text-yellow-500 mb-4" />,
    technologies: ["C++", "Java", "Problem Solving", "Algorithms"],
    projects: 8,
    level: "Beginner to Advanced",
  },
];

// Technology images data
const technologies = [
  { name: "React", src: ReactI },
  { name: "Angular", src: Agular },
  { name: "Java", src: Java },
  { name: "Spring Boot", src: SpingBoot },
  { name: "MySQL", src: Mysql },
  { name: "Python", src: Python },
  { name: "Docker", src: Docker },
  { name: "Git", src: Git },
  { name: "GitHub", src: GitHub },
  { name: "HTML", src: HTML },
  { name: "CSS", src: CSS },
  { name: "Bootstrap", src: BootStrap },
  { name: "TypeScript", src: TypScript },
  { name: "Figma", src: Figma },
  { name: "VS Code", src: VSCODE },
  { name: "Postman", src: Postman },
  { name: "Jenkins", src: jenking },
  { name: "Kafka", src: Kafka },
  { name: "Hibernate", src: Hibernate },
  { name: "Maven", src: Maven },

  // { name: "Spring Framework", src: SpringFrame },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section id="courses" className="py-12  bg-pink-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">OUR COURSES</h2>
          <div className=" text-2xl mb-6">
            Explore our range of professional offerings designed to boost your
            skills and career
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-2xl hover:scale-110  duration-500  hover:bg-orange-500  hover:text-white"
              >
                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {course.title}
                </h3>
                <p className=" mb-3">{course.description}</p>
                <span className="text-sm text-gray-500">
                  Duration: {course.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Stylish Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <div className="inline-block">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 relative">
                <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  Technologies
                </span>
                <br />
                <span className="text-gray-900 drop-shadow-lg">We Teach</span>

                {/* Decorative underline */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 md:w-32 lg:w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg"></div>
              </h2>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mt-6 md:mt-8">
              Master the most in-demand technologies and tools used by top
              companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-gray-100 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 mb-3 relative group-hover:animate-pulse">
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-700 text-center group-hover:text-orange-500 transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              And many more cutting-edge technologies to keep you ahead in the
              industry!
            </p>
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white py-3 px-8 rounded-lg font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              View All Technologies
            </button>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Courses;
