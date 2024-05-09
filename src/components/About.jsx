function About(){
    const navItems=[
        {
            id:1,
            text:"Skills"
        },
        { 
            id:2,
            text:"Experiance"
        },
        {
            id:3,
            text:"Education"
        },
    ]
    return (
        <div name="About" className= "max-w-screen-2xl container mx-auto px-4 md:px-20 my-14">
            
            <div className=" flex flex-col md:flex-row">
                <div className="md:w-1/2    order-1 md:order-1">
                    <img src="dp---6.jpg" className="md:w-[500px] md:h-[500px]" alt="" />
                </div>
                <div className="md:w-1/2  order-2 md:order-2" >
                    <h1 className="text-3xl font-bold mb-5 ">About Me</h1>
                    <p className="text-sm md:text-md text-justify">Hey there! I am Manzoor Elahi, a passionate individual exploring the captivating world of Artificial Intelligence and Data Science. I passed my high school degree from Sita Ram High School West Champaran (Bihar), intermidiate degree from Gulab Memorial college bettiah (Bihar)
                     Currently pursuing my undergraduate degree at Siliguri Institute of Technology, West Bangal, my heart lies in UI development, web development, and problem-solving,  My portfolio showcases my growth, projects, and aspirations to make a positive impact through innovative solutions.</p>
                    <br/>
                    <div className=" text-2xl">
                        <ul className="  flex space-x-7">
                            {
                                navItems.map(({id,text})=>(
                                    <li className="hover:scale-105 duration-200 cursor-pointer"key={id} >{text}</li>
                                ))
                            }

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;