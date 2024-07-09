import "./hero.scss"
import { motion } from "framer-motion"

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    },
  },
  firstScroll: {
    y: 0,
    opacity: 0.7
  },

  secondScroll: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 2,
      repeat: Infinity
    },
  },
};

const sliderVariants = {

  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      reapetType: "mirror",
      duration: 20,
      reapet: Infinity,
    }
  }
};


const Hero = () => {
  return (
    <motion.div className="hero">

      <motion.div className="wrapper">
        <motion.div className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate">
          <h2 variants={textVariants}>HARVEY TYLER</h2>
          <h1 variants={textVariants}>Developer and Designer</h1>
          <motion.div variants={textVariants} className="buttons">
            <button variants={textVariants}>See the Latest Works</button>
            <button variants={textVariants}>Contact Me</button>
          </motion.div>
          <motion.img variants={textVariants} inherit="firstScroll" animate="secondScroll" src="scroll.png" alt="" />
        </motion.div>
      </motion.div>


      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>


      <div className="imageConatainer">
        <img src="hero.png" alt="" />
      </div>
    </motion.div>
  )
}

export default Hero