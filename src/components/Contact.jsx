import { motion } from 'framer-motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { textVariant } from '../utils/motion';
import { BsLinkedin, BsFillEnvelopeAtFill, BsGithub } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
      </motion.div>
      <div className="mt-12 flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-[#DCCFEC] p-8 rounded-2xl"
        >
          <div className="flex flex-row text-[#7A8B99] justify-center justify-evenly items-center object-contain">
            <a href="https://linkedin.com/in/duan-chen" target="_blank">
              <BsLinkedin className="w-10 h-10"/>
            </a>
              
            <a href="mailto:duanchenwork@gmail.com">
              <BsFillEnvelopeAtFill className="w-10 h-10"/>
            </a>
            <a href="https://github.com/duanhash" target='_blank'>
              <BsGithub className="w-10 h-10"/>
            </a>
          </div>

        </motion.div>

        <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex-auto relative w-full h-[550px] mx-auto"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");