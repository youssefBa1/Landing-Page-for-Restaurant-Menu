
import React, { useRef } from "react";

const Heading = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const handleScroll = (event: React.WheelEvent) => {
        if (event.deltaY > 0 && formRef.current) {
            // Scroll down
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleButtonClick = () => {
        // Get the element you want to scroll to
        const menuElement = document.getElementById("menu");

        // Scroll to the element with smooth behavior
        if (menuElement) {
            // Scroll to the element with smooth behavior
            menuElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className=" relative w-screen h-screen bg-[#303030] flex flex-row items-start justify-start p-4 overflow-hidden overflow-x-hidden">

            {/* Logo */}
            <img src="src/assets/logo-removebg-preview.png" alt="" style={{ width: '150px', height: 'auto' }} />

            {/* Dish image */}
            <div
                className="absolute top-[65%] left-[25%] transform -translate-x-1/2 -translate-y-2/3 bg-[#303030] border-red-500 border-4 rounded-[50%] bg-cover"
                style={{ width: '40%', height: '80%', zIndex: 0, backgroundImage: 'url(src/assets/chiliDish.jpg)', }}
            ></div>

            {/* Container for the top right semi-circle */}
            <div className="absolute top-[-6rem] left-1/2 transform -translate-x-1/8 w-[40rem] h-[20rem] bg-[#252525] rounded-b-full z-5"></div>

            {/* Container for the right half-circle */}
            <div className="absolute top-0 right-0 w-[38rem] h-[47rem] bg-[#272727] rounded-l-full z-10 opacity-50"></div>

            {/* Container for the third div beneath the first two */}
            <div className="absolute top-0 right-0 w-[55rem] h-[47rem] bg-[#242424] rounded-l-full z-15 opacity-45"></div>

            {/* Green circles on the left corner */}
            <div className="absolute bottom-[-3rem] left-[-4rem] w-40 h-40 bg-[#6ee22a] rounded-[50%] z-20"></div>
            <div className="absolute bottom-[-3.5rem] left-[-4.5rem] w-[12rem] h-[12rem] bg-[#6ee22a] rounded-[50%] z-21 opacity-50"></div>

            {/* Green circles on the bottom middle */}
            <div className="absolute bottom-[-4rem] left-[56%] transform w-40 h-40 bg-[#64ae39] rounded-[50%] z-20 "></div>
            <div className="absolute bottom-[-5rem] left-[55%] transform w-[12rem] h-[12rem] bg-[#6ee22a] rounded-[50%] z-20 opacity-50"></div>

            {/* Dotted circle in the bottom right corner */}
            <div className="absolute bottom-[-5rem]  right-[-5rem] w-56 h-56  rounded-full rotate-[-20deg]">
                {/* i tried to implement the design with css but it didin't look good */}
                {/* <div className="relative w-full h-full  rounded-full" style={{ background: 'inherit', filter: 'contrast(5)', borderRadius: '50%' }}>
                    <div className="absolute top-0 right-0 bottom-0 left-0" style={{ background: 'radial-gradient(#00ff00, transparent) 0 0/ 0.5em 0.5em space', borderRadius: '50%', WebkitMask: 'radial-gradient(red, rgba(0, 0, 0, .45))', mask: 'radial-gradient(red, rgba(0, 0, 0, .45))' }}></div>
                </div> */}
                <img src="src/assets/Untitled_design-removebg-preview (1).png" alt="Background Image" className="w-full h-full rounded-full " style={{ objectFit: 'cover', borderRadius: '50%' }} />
            </div>


            <div className="absolute top-0 right-0 w-[60rem] h-[47rem] bg-[#2c2c2c] rounded-l-full z-1 opacity-50"></div>

            {/* Container for the text */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-white text-center z-30 ml-72 ">
                <p className="text-3xl text-white text-left mb-6 ">Chili's Tunis</p>
                <p className="text-6xl text-[#6ee22a] text-left font-extrabold" style={{ fontFamily: 'Juno Semicondensed' }}>Découvrez les <br />meilleures recettes <br /> syriennes</p>

                {/* Button Container */}
                <div className="mt-6">
                    {/* Red Button */}
                    <button className="bg-red-600 text-white px-8 py-4 rounded-2xl mr-[19rem] w-64 font-bold text-lg" onClick={handleButtonClick}>
                        Voir Notre Menu
                    </button>
                </div>
            </div>
        </div>
    );
}


export default Heading;
