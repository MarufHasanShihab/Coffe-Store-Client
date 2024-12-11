import { Link, NavLink } from 'react-router-dom';
import header_bg from '../../assets/header-bg.png'
import header_logo from "../../assets/header-logo.png"

const Header = () => {
    return (
        <div style={{backgroundImage: `url('${header_bg}')`}} className="w-full h-16 px-24 bg-center bg-no-repeat bg-cover flex justify-center items-center">
            <Link to="/"><img src={header_logo} alt="header__logo" className='w-64' /></Link>
        </div>
    );
};

export default Header;