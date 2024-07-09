import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react";

const item = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.unsplash.com/file-1715714113747-b8b0561c490eimage?dpr=2&w=416&auto=format&fit=crop&q=60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis cumque, totam odit doloribus ipsum quidem suscipit molestias repudiandae iste deserunt obcaecati, nemo inventore incidunt eum, repellat fugiat veritatis unde tenetur voluptatem doloremque ex."
    },

    {
        id: 2,
        title: "Next.js Blog",
        img: "https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis cumque, totam odit doloribus ipsum quidem suscipit molestias repudiandae iste deserunt obcaecati, nemo inventore incidunt eum, repellat fugiat veritatis unde tenetur voluptatem doloremque ex."
    },

    {
        id: 3,
        title: "Vanilla JS App",
        img: "https://images.unsplash.com/file-1635990755334-4bfd90f37242image?dpr=2&w=416&auto=format&fit=crop&q=60",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis cumque, totam odit doloribus ipsum quidem suscipit molestias repudiandae iste deserunt obcaecati, nemo inventore incidunt eum, repellat fugiat veritatis unde tenetur voluptatem doloremque ex."
    },

    {
        id: 4,
        title: "Music App",
        img: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG11c2ljJTIwYXBwfGVufDB8fDB8fHww",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam blanditiis cumque, totam odit doloribus ipsum quidem suscipit molestias repudiandae iste deserunt obcaecati, nemo inventore incidunt eum, repellat fugiat veritatis unde tenetur voluptatem doloremque ex."
    }
];

const Single = ({ item }) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["start start", "end start"]

    })

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])

    return (
        <section>
            <div className="container">

                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2 >{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <div className="protfolio" ref={ref}>

            <div className="progress" >
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar">

                </motion.div>
            </div>

            {item.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
};

export default Portfolio