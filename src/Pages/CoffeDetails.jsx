import { useLoaderData } from "react-router-dom";
import BackButton from './../Components/BackButton';

const CoffeDetails = () => {
  const coffe = useLoaderData();
  return (
    <div>
      <div className="py-4 px-12">
        <BackButton/>
      </div>
      <div className="flex justify-center py-16">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 bg-[#F4F3F0] shadow-md p-8 rounded-[5px]">
            <img src={coffe.photo} alt=""/>
            <div className="space-y-2">
                <h2 className="text-[#331a15] text-4xl font-normal font-rancho">Niceties</h2>
                <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Name :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.name}
                </span>
              </h4>
              <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Chef :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.chef}
                </span>
              </h4>
              <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Price :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.price} Taka
                </span>
              </h4>
              <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Taste :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.taste}
                </span>
              </h4>
              <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Category :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.category}
                </span>
              </h4>
              <h4 className="text-[#1b1a1a] text-[18px] font-semibold font-relway">
                Details :{" "}
                <span className="text-[#5c5b5b] text-[16px] font-normal">
                  {coffe.details}
                </span>
              </h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeDetails;
