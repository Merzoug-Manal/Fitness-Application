import { SelectedPage } from "@/shared/types"
import {motion} from "framer-motion"
import training from "@/assets/training.jpeg"
import fitness from "@/assets/fitness.jpeg"
import pilate from "@/assets/pilates.jpeg"
import abs from "@/assets/abs.jpeg"
import yoga from "@/assets/yoga.jpeg"
import HText from "@/shared/HText"
import { ClassType } from "@/shared/types"
import Class from "./Class"

const classes: Array<ClassType>=[
    {
        name:"Training Classes",
        description:"Challenge yourself with intense, strength-building workouts designed to help you get stronger and fitter. Perfect for all levels, our training sessions push you to achieve your personal best.",
        image:training,
    },
    {
        name:"Fitness Classes",
        description:"Get your heart racing with our fun and energetic fitness classes. Burn calories, boost endurance, and enjoy a full-body workout that keeps you feeling energized.",
        image: fitness,
    },
    {
        name:"Pilates Classes",
        description:"Improve flexibility and core strength with controlled, low-impact Pilates movements. Ideal for enhancing posture, balance, and overall body alignment.",
        image: pilate
    },
    { 
        name:"Abs Core Classes",
        description:"Target your core and build a toned midsection with quick, effective abs workouts. These sessions help you strengthen and define your core muscles.",
        image:abs,
    },
    {
        name:"Yoga Classes",
        description:"Find balance and peace with yoga. Improve flexibility, reduce stress, and enjoy a calm mind-body connection through guided poses and breathing exercises.",
        image:yoga,
    }
]

type Props={
setSelectedPage:(value:SelectedPage)=>void;
}



function OurClasses({setSelectedPage}:Props) {
  return (
    <section id="ourclasses" className="w-full bg-pink2 py-40">
     <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
                className="mx-auto w-5/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
                >
            <div className="md:w-3/5  ">
                <HText  >OUR CLASSES</HText>   
                <p className="py-5">At Zen Fitness, we offer a diverse range of classes tailored to meet your fitness goals and help you stay motivated. Whether you’re looking to build strength, enhance flexibility, or boost core stability, we’ve got the perfect class for you!</p>
            </div>
      </motion.div>
    <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden" >
        <ul className=" w-[1000px] whitespace-nowrap">
            {classes.map((item:ClassType,index)=>(
                <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}/>
            ))}

        </ul>

    </div>
    </motion.div>
    </section>
  )
}

export default OurClasses
