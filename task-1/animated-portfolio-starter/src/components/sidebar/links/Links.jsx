import  { motion } from "framer-motion"


const variants = {
  open: {
    transition: {
      staggerChildern: 0.1,
    }
  },

  closed: {
    transition: {
      staggerChildern: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    transition: {
      type: "spring",
      stiffness: 50,
    },
    y: 0,
    opacity: 1,
  },

  closed: {
    y: 500,
    opacity: 0,
  },
};


const Links = () => {

  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a href={`#${item}`} key={item} variants={itemVariants}
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  )
};

export default Links