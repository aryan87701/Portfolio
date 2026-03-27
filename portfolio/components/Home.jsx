import Component1 from "../assest/Component 1.png"

function Home() {
  return (
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center home"
 >

      {/* Text Section */}
      <div className="text-center" >
        <p className="text-white text-lg md:text-2xl">Hello</p>

        <h1 className="text-white text-3xl sm:text-5xl md:text-5xl font-bold">
          I'm <span className="text-red-700 animate-pulse">Aryan Singh</span>
        </h1>

        <h2 className="text-white text-xl sm:text-3xl md:text-4xl">
          A passionate Web Developer
        </h2>
      </div>

      {/* Image */}
      <div className="mt-10">
        <img 
          src={Component1} 
          alt="Profile"
          className="w-60 sm:w-80 md:w-[30rem] max-w-full"
        />
      </div>

      {/* Bottom Text Section */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 text-white text-center md:text-left max-w-6xl"
      style={{
        padding:"0px 20px"
      }}>
        
        <div className="md:w-1/2">
          <h2>
            This is my first portfolio website using my learnings as a frontend developer
          </h2>
        </div>

        <div className="md:w-1/2">
          <h2>
            Go through my website and projects and get to my enthusiasm towards my work
          </h2>
        </div>

      </div>

    </div>
  )
}

export default Home
