import hero_bg from "../assets/more/3.png"

const Hero = () => {
    return (
        <div style={{backgroundImage: `url('${hero_bg}')`}} className="w-full h-screen bg-center bg-no-repeat bg-cover flex justify-end items-center">
            <div className="space-y-8 p-8 xl:p-12 text-center md:text-left">
                <h2 className="font-rancho text-white font-normal text-3xl md:text-[55px]">Would you like a Cup of Delicious Coffee?</h2>
                <p className="text-white font-relway max-w-[700px] font-normal text-base ">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="bg-[#E3B577] py-2 px-4 font-rancho text-[#242222] text-[18px]">Learn More</button>
            </div>
        </div>
    );
};

export default Hero;