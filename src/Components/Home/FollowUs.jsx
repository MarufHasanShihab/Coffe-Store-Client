import Title from "../Title";
// Import This Page All Images
import cup1 from "../../assets/cups/Rectangle 9.png"
import cup2 from "../../assets/cups/Rectangle 10.png"
import cup3 from "../../assets/cups/Rectangle 11.png"
import cup4 from "../../assets/cups/Rectangle 12.png"
import cup5 from "../../assets/cups/Rectangle 13.png"
import cup6 from "../../assets/cups/Rectangle 14.png"
import cup7 from "../../assets/cups/Rectangle 15.png"
import cup8 from "../../assets/cups/Rectangle 16.png"

const FollowUs = () => {
    return (
        <div className="py-24 ">
            <Title subTitle="Follow Us Now" title="Follow on Instagram"/>
           <div className="flex justify-center py-6">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <img className="w-56 md:w-64" src={cup1} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup2} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup3} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup4} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup5} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup6} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup7} alt="cup__img" />
                <img className="w-56 md:w-64" src={cup8} alt="cup__img" />
            </div>
           </div>
        </div>
    );
};

export default FollowUs;