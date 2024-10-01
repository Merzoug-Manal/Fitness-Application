import HText from "@/shared/HText";
import { SelectedPage, BenefitType } from "@/shared/types";
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from "@heroicons/react/16/solid";
import{motion} from "framer-motion"
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitGraphic from "@/assets/benefit.png"
 


type Props = {
    setSelectedPage:(value:SelectedPage) => void;
};
const benefits:Array<BenefitType>=[
    {
    icon:<HomeModernIcon className="h-6 w-6"/>,
    title: "State of the Art Facilities",
    description:"Our state-of-the-art facilities are equipped with the latest technology and premium equipment to support all your fitness goals. From cutting-edge cardio machines to top-tier strength training equipment, we provide everything you need for an exceptional workout experience ."
    },
    {
        icon:<UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description:"With hundreds of diverse classes available, we offer something for everyone, no matter your fitness level or goals. From high-energy group workouts to calming yoga sessions, our expert instructors lead classes designed to challenge, motivate, and inspire you every day."
        },
        {
            icon:<AcademicCapIcon className="h-6 w-6"/>,
            title: "Expert and Pro Trainers",
            description:"Our team of expert and pro trainers are dedicated to helping you achieve your fitness goals. With years of experience and specialized knowledge, they provide personalized guidance, support, and motivation to ensure every workout is effective and safe. Train with the best to unlock your full potential."
            }
]
const Benefits=({setSelectedPage}:Props)=> {
  return (
    <section id="benefits"
    className="mx-auto min-h-full w-5/6 py-20" >
     <motion.div 
      onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
     >
        {/*Header */}
        <div className="md:my-5 md:w-4/5">
           <HText>MORE THAN JUST A GYM.</HText>
           <p className="my-5 text-sm"
           >We help you transform your body and mind with personalized training programs tailored to fit your unique needs. Our expert coaches and state-of-the-art facilities guide you every step of the way, ensuring you achieve lasting results and total well-being.</p>
        </div>
        {/*Befenits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex ">
           {benefits.map((benefit:BenefitType) => (
            <Benefit
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
           )
           )}
        </div>

        {/*  Graphics and  Description*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex ">
         {/*Graphic*/}
         <img className="mx-auto"
         alt="benifits-graphic"
         src={BenefitGraphic} />
         {/* description*/ }
         <div>
            <div className="relative">
               <div className="before:absolute before:-top-20 before:-left-20 before:content-abstractwaves">
                     <HText>MILLIONS OF HAPPY MEMBERS GETTING FIT. </HText> 
               </div>
            </div>
            {/*descript */}
            <div>
               <p className="my-5">
               Join a thriving community of fitness enthusiasts who have transformed their lives with Zen Fitness. With our expert-led programs and state-of-the-art facilities, millions of members are achieving their goals, staying active, and embracing a healthier lifestyle. Our holistic approach to fitness ensures that you not only build physical strength but also improve your mental well-being.
               </p>
               <p className="my-5" >
               Discover the motivation, support, and resources you need to stay committed and become the best version of yourself. Get started today and be a part of the Zen Fitness family! 
               </p>
            </div>
            {/*Button */}
            <div className="relative mt-16" >
               <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
            </div>
         </div>
        </div>
     </motion.div>
    </section >
  )
}

export default Benefits;