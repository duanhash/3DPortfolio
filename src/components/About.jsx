import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc'; 
import { Duan_Chen_Head } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-[20px] shadow-card select-none"
      >
        <div 
          options={{ max: 45, scale: 1, speed: 450}} 
          className="bg-[#DCCFEC] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-[#7A8B99] text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex items-center min-[1000px]:flex-row flex-col-reverse"
      >
        <p className="mt-4 text-white text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
          Hello, my name is Duan Chen and I'm a second year computer science student at the City College of San Francisco 
          graduating in May 2024. 
        </p>

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          <div className="xs:w-[350px] w-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-[1px] rounded-[20px] shadow-card">
            <div className="bg-[#DCCFEC] rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden">
              <img
                src={Duan_Chen_Head}
                alt="myPhoto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </Tilt>
      </motion.div>

      {/* <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");