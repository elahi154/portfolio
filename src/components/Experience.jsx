import html from "../../public/html.jpeg";
import css from "../../public/css.jpeg";
import javascript from "../../public/javascript.jpeg";
import nodejs from "../../public/nodejs.jpeg";
import react from "../../public/react.jpeg";
import mongodb from "../../public/mongodb.jpeg";
import sql from "../../public/sql.jpeg";
import cpp from "../../public/cpp.jpeg";
import c from "../../public/c.jpeg";
import dsa from "../../public/dsa.jpeg"




function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "Html",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "Javascript",
        },
        {
            id: 4,
            logo: react,
            name: "React",
        },
        {
            id: 5,
            logo: nodejs,
            name: "Nodejs",
        },
        {
            id: 6,
            logo: mongodb,
            name: "Mongodb",
        },
        {
            id: 7,
            logo: sql,
            name: "SQL",
        },
        {
            id: 8,
            logo: c,
            name: "C",
        },
        {
            id: 9,
            logo: cpp,
            name: "C++",
        },
        {
            id: 10,
            logo: dsa,
            name: "DSA",
        },

    ];
    return (
        <div>
            <div
                name="Experience"
                className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
            >
                <div> 
                    <h1 className="text-3xl font-bold mb-5">Experiance</h1>
                    <p className="  ">
                        I have  experiance in below technologies.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
                        {cardItem.map(({ id, logo, name }) => (
                            <div
                                className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
                                key={id}
                            >
                                <img src={logo} className="w-[150px] rounded-full" alt="" />
                                <div>
                                    <div className="">{name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience
