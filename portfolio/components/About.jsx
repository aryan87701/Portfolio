import png from '../assest/pnnng.png'
import html from '../assest/html.png'
import css from '../assest/css.png'
import js from '../assest/js.png'
import tailwindcss from '../assest/tailwindcss.webp'
import node from '../assest/node.png'
import react from '../assest/react.png'

import { useEffect, useRef } from 'react'

export default function About() {
  const elementsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      id="about"
className="bgabout mt-20 min-h-screen flex flex-col items-center py-20 px-6 md:px-20"


      style={{
        padding:"5em 20px 0px 20px "
      }}
    >
      {/* Center Container */}
      <div className="w-full">

        {/* ABOUT */}
        <div
          className="animate mb-16 flex flex-col mx-20 w-full px-20 gap-3"
          ref={(el) => (elementsRef.current[0] = el)}
          style={{
            padding:"0px 20px",
            marginBottom:"20px"
          }}
        >
          <h1 className="text-4xl md:text-5xl bg-white w-max px-6 py-2 rounded-lg mb-6">
            About Me:
          </h1>

          <p className="text-white text-base md:text-[1.5em] max-w-full mb-6">
            I’m a passionate Web Developer who enjoys building clean,
            responsive, and user-friendly web interfaces. I love turning ideas
            into real, interactive experiences using modern web technologies.
            <br /><br />
            I work mainly with HTML, CSS, JavaScript, React, Tailwind CSS,
            and Express.js, and I’m always curious to learn new tools and
            improve my skills.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex flex-col lg:flex-row items-center mt-20 gap-5">

          {/* Astronaut Image */}
          <div
            className="animate hidden lg:block flex-1"
            ref={(el) => (elementsRef.current[1] = el)}
          >
            <img
              src={png}
              alt="about"
              className="w-150 bottom-10 relative hover:scale-105 transition duration-300"
            />
          </div>

          {/* Skills Section */}
          <div className="float-right w-[50%]  relative gap-3 max-md:justify-center max-lg:w-full"
          style={{
            paddingBottom:"250px",
            padding:"0px 20px "
          }}>

            <div
              className="animate mb-10 flex gap-3 flex-col p-3  "
              style={{
                marginTop:"20px",
                marginBottom:"20px"
              }}
              ref={(el) => (elementsRef.current[2] = el)}
            >
              <h1 className="text-4xl md:text-5xl bg-white w-max px-6 py-2 rounded-lg mb-6 ">
                Skills:
              </h1>

              <p className="text-white text-base md:text-[1.5em] leading-relaxed">
                I work with the MERN stack to build full-stack web applications,
                using React for dynamic user interfaces, Node.js and Express.js
                for backend APIs, and MongoDB for data management.
              </p>
            </div>

            {/* Icons */}
            <div className="flex flex-wrap gap-8 mt-8 max-md:hidden">
              {[html, css, js, tailwindcss, node, react].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="skill"
                  className="animate h-16 w-16 md:h-20 md:w-20 hover:scale-110 transition duration-300"
                  ref={(el) => (elementsRef.current[i + 3] = el)}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}
