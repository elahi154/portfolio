import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
    return(
        <>
        <div name="Home" className= "max-w-screen-2xl  container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl">Welcome In My Feed</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                        <h1>Hello, I am a </h1>
                         {/* <span className="text-red-700 font-bold"> Developer</span> */}
                         <ReactTyped 
                            className="text-red-700 font-bold"
                            
                            strings={["Developer", "Programer", "coder"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                         />
      
                    </div>
                    <br/>
                    <p className=" md:text-md text-justify"> hey,I am Manzoor Elahi from India </p>
                    <br/>
                    {/* social media icons*/}

                   <div className="flex flex-col items-center  md:flex-row justify-between space-y-6 md:space-y-0">
                        <div className="space-y-2">
                            <h1 className="font-bold">Available On</h1>
                            <ul className="flex space-x-4">
                                <li>
                                    <a href="https://www.facebook.com/manzoorelahi.manzoorelahi.92" target="_blank">
                                        <FaFacebook className="text-2xl cursor-pointer"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/elahi__73?igsh=MTc4c25haDEwbm42cg==" target="_blank">
                                        <FaInstagram className="text-2xl cursor-pointer"/>
                                    </a>
                                    
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/manzoor-elahi-06a4b2267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                                        <FaLinkedin className="text-2xl cursor-pointer"/>
                                    </a>
                                </li>
                                <li>
                                    <a href=" https://github.com/dashboard" target="_blank">
                                        <FaGithub className="text-2xl cursor-pointer"/>
                                    </a>
                                    
                                </li>
        
                            </ul>
                    </div>
                
                    <div className="space-y-2">
                        <h1 className="font-bold">Curently work on</h1>
                        <div className="flex space-x-4">
                            <BiLogoMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                            <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] " />
                            <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] "/>
                            <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] "/>
                        </div>
                    </div>
                   </div>
               
                </div>

                <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                    <img src="dp-5.jpg" className="rounded-full md:w-[400px] md:h-[400px]" alt="" />
                </div>
            </div>
        </div>
        <hr/>
        
        </>

    )
}
export default Home;