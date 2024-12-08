import { Link } from "react-router-dom";
import backArrow from "../assets/icons/back-arrow.png";

const BackButton = () => {
  return (
    <div>
      <Link to="/">
        <button className="flex items-center gap-2 text-gray-700 font-rancho text-3xl font-normal">
          <img src={backArrow} alt="back_arrow-img" />
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default BackButton;
