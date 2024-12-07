// import all icon
import icon1 from "../../assets/icons/1.png"
import icon2 from "../../assets/icons/2.png"
import icon3 from "../../assets/icons/3.png"
import icon4 from "../../assets/icons/4.png"

const qualites = [
    {
        id:1,
        img: icon1,
        title:"Awesome Aroma",
        des:"You will definitely be a fan of the design & aroma of your coffee"
    },
    {
        id:2,
        img: icon2,
        title:"High Quality",
        des:"We served the coffee to you maintaining the best quality"
    },
    {
        id:3,
        img: icon3,
        title:"Pure Grades",
        des:"The coffee is made of the green coffee beans which you will love"
    },
    {
        id:4,
        img: icon4,
        title:"Proper Roasting",
        des:"Your coffee is brewed by first roasting the green coffee beans"
    },
]

const Quality = () => {
    return (
        <div className="w-full bg-[#ECEAE3] flex items-center bg-center">
            <div className="py-10 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 container mx-auto">
                {
                    qualites?.map(quality => (
                        <div key={quality.id} className="space-y-4">
                            <img src={quality.img} alt="" className="w-[70px]" />
                            <h3 className="text-[#331A15] font-rancho text-[35px] font-normal">{quality.title}</h3>
                            <p className="text-[#1B1A1A] text-base font-relway">{quality.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Quality;