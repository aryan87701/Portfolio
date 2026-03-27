import work from '../assest/work.jpg'
import p1 from '../assest/p1.mp4'
import p2 from '../assest/p2.mp4'
import p3 from '../assest/p3.mp4'
import p4 from '../assest/p4.mp4'
import { useEffect, useRef } from 'react'

const Projects = () => {
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
      {
        threshold: 0.2,                 // 🔥 FIXED
        rootMargin: "0px 0px -50px 0px" // 🔥 FIXED
      }
    )

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{
      backgroundImage: `url(${work})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "fit-content",
    }} id='projects' className=''>

      <div
        className='h-fit w-fit max-lg:pt-0'
        style={{
          margin: "20px",
          paddingTop: "5em"
        }}
      >

        <p
          ref={(el) => (elementsRef.current[0] = el)}
          className='animate text-gray-400 border-1 border-white rounded-4xl w-30 text-center text-2xl'
          style={{ marginBottom: "10px" }}
        >
          my work
        </p>

        <h1
          ref={(el) => (elementsRef.current[1] = el)}
          className='animate text-3xl text-white'
        >
          My latest work
        </h1>

        <div
          ref={(el) => (elementsRef.current[2] = el)}
          className='animate text-gray-400 text-[1.4vw] w-[90vw] flex justify-between'
          style={{ padding: "15px 0px" }}
        >
          <p className='text-[1.5em] max-md:text-[3em]'>
            Here are some of my recent projects built using modern web technologies.
            Each project reflects my focus on clean design and efficient code.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 mt-10 items-center justify-center">
    
            <div
              ref={(el) => (elementsRef.current[3] = el)}
          
              className="animate relative bg-[#111] rounded-[40px] cursor-pointer overflow-hidden w-[20em] h-[350px] shadow-2xl group"
            ><a href=''>
              <video
                src={p1}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
              </a>

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

              <div className="absolute bottom-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              <a href="https://github.com/aryan87701/InternLink.git" target='_blank'>↗</a>
              </div>
            </div>

                 <div
              ref={(el) => (elementsRef.current[4] = el)}
          
              className="animate relative bg-[#111] rounded-[40px] cursor-pointer overflow-hidden w-[20em] h-[350px] shadow-2xl group"
            >
              <video
                src={p2}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

              <div className="absolute bottom-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                  <a href="https://github.com/aryan87701/Task1.git" target='_blank'>↗</a>
              </div>
            </div>

                 <div
              ref={(el) => (elementsRef.current[5] = el)}
          
              className="animate relative bg-[#111] rounded-[40px] cursor-pointer overflow-hidden w-[20em] h-[350px] shadow-2xl group"
            >
              <video
                src={p3}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
         

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

              <div className="absolute bottom-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
              <a href="https://github.com/aryan87701/MovieWebsite.git" target='_blank'>↗</a>
              </div>
            </div>

                 <div
              ref={(el) => (elementsRef.current[6] = el)}
          
              className="animate relative bg-[#111] rounded-[40px] cursor-pointer overflow-hidden w-[20em] h-[350px] shadow-2xl group"
            >
              <video
                src={p4}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />


              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300"></div>

              <div className="absolute bottom-6 right-6 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition">
                    <a href="https://github.com/aryan87701/bestwishes-nexura.git" target='_blank'>↗</a>
              </div>
            </div>

  
      
        </div>

      </div>

    </div>
  )
}

export default Projects
