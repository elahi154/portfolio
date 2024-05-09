import bookstore from "../../public/bookstore.avif";

import physiotheprist from "../../public/physiotheprist.jpg";
import medihelp from "../../public/medihelp.jpg";
import Ecommerce from "../../public/Ecommerce.avif" 

import login from "../../public/login.avif";
import tictak from "../../public/tictak.jpeg"
import {Slide,Fade} from "react-awesome-reveal";
import { CiShare1 } from "react-icons/ci";

function Project(){
    const cardItem=[
        {
            id:1,
            logo: bookstore,
            name: "BookStore",
            desc: "Create a BookStore App using React and Tailwind CSS for front-end design and express mongodb and nodejs for back-end",
            shareLink:"",
        },
        {
            id:2,
            logo: physiotheprist,
            name: "Physio at home",
            desc: "This is the full stack web application Frontend designed by react and backend designed by express nodejs and mongodb",
            shareLink:"",
        },
        {
            
            id:3,
            logo: medihelp,
            name:"MediHelp",
            desc:"Developed MediHelp , a web application in the help of react for frontend and backend through mongodb and express",
            shareLink:"",
        },
        {
            
            id:4,
            logo:Ecommerce,
            name:"E-commerce",
            desc:"Designed by HTML CSS and JavaScript and deplay in netify",
            shareLink:"https://master--stalwart-gecko-3be862.netlify.app/",
        },
        {
            
            id:5,
            logo:login,
            name: "Login_page",
            desc:"Successfully engineered and implemented a secure and user-friendly login and sign-up system utilizing a technology stack comprising HTML, CSS, JavaScript  ",
            shareLink:"",
        },
        {
            
            id:6,
            logo: tictak,
            name: "Tic-tak-toe",
            desc:"Designed and implemented a Tic Tac Toe game using Html Css JavaScript in frontend development  ",
            shareLink:"",
        },
    ];
    return(
        <div name="Project" className= "max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5 ">Project</h1>
            
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
                    {
                        cardItem.map(({id,logo,name,desc,shareLink})=>(
                            <div key={id} className=" md:w-[300px] md:h-[350] text-white shadow-md rounded-lg overflow-hidden relative group"> 
                                <img src={logo} alt="" className="md:w-[300px] md:h-[350] " />
                                <div className="absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/60 group-hover:backdeop-blur-sm duration-500">
                                    <div className="space-y-4">
                                        <Slide cascode>
                                            <h1 className="text-3xl font-bold">{name}</h1>
                                            <Fade cascode damping={0.05}>{desc}</Fade>
                                            <li className="text-3xl  md:text-3xl cursor-pointer flex flex-col items-center  ">
                                                <a href={shareLink} target="_blank" rel="noopener noreferrer">
                                                    <CiShare1 className="" />    
                                                </a>
                                            </li>
                                            
                                        </Slide>
                                            
                                        
                                    </div>
                                </div>
                            </div>
                

                        ))
                    }
                
                </div>
            </div>
        </div>
    )
}
export default Project;