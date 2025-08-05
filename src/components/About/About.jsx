import ReactTypingEffect from "react-typing-effect"
import profileImage from '../../assets/achal.png'

const About = () => {
  return (
    <section 
    id="about"
    className="py-4 px-[5vw] md:px[5vw] lg:px-[12vw] mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">Hii I am</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-4 font-bold leading-tight">Achal Thakare</h2>

       {/* Skils heading with typing effect */}
       <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight ">
        <span className="text-white">
          I am a &nbsp;
        </span>
        <ReactTypingEffect
          text={[
            'Fullstack Developer',
            'Coder',
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer = {(cursor)=>(
<span className="text-[#8245ec]">{cursor}</span>
  )}
        />
       </h3>
       <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
I’m a final-year Computer Science student with a strong interest in full-stack web development. I’ve worked on various projects using the MERN stack, where I’ve built everything from user-friendly interfaces to efficient backend APIs. I’m always exploring new technologies, and I enjoy turning ideas into working applications that solve real problems.
       </p>
       {/* Resume Button */}
      <a
      href="https://drive.google.com/file/d/12VYq0jcNcGuPdQlkDqdnx49WS5RBs0LP/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block text-white py-3 px-8 rounded-full mt-3 text-lg font-bold transition duration-300 transform hover:scale-105"
      style={{
       
        
        boxShadow:'0 0 2px ,0 0 2px #8245ec ,0 0 20px #8245ec'
      }}
      >DOWNLOAD CV</a>
        </div>
        {/* Picture */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src={profileImage}   className="w-50 h-50 sm:w-70 sm:h-70 md:w-110 md:h-110 rounded-full object-cover md:ml-12 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" 
></img></div>
      </div>
    </section>
  )
}

export default About
