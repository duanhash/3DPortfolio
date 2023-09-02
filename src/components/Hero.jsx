import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SpaceCanvas } from './canvas';
import { Cursor, useTypewriter } from 'react-simple-typewriter';


const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome to my website",
      "I'm a reader",
      "I'm a student",
      "I'm working towards becoming a developer",
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#DCCFEC]"/>
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hey, I'm <span className="text-[#DCCFEC]">Duan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            {text}
            <Cursor cursorColor="white" />
          </p>
        </div>
      </div>
      <SpaceCanvas className="flex-auto"/>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#DCCFEC] flex justify-center items-start p-2">
            <motion.dev 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-[#DCCFEC] mb-1"
            />
          </div>
        </a>

      </div>
    </section>
  );
};

export default Hero;