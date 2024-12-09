import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import cupImg from "../../assets/icons/fav-icon.png";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import footerBg from "../../assets/footer-bg.png";

const Footer = () => {
  return (
    <div className="border-t-2">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-28 px-24 py-6">
        <div className="space-y-4">
          <img src={cupImg} alt="" />
          <h2 className="text-[#331a15] text-[25px] md:text-[45px] font-normal font-rancho">Espresso Emporium</h2>
          <p className="max-w-[550px] text-[#1a1919] text-[12px] md:text-[16px] font-normal font-['Raleway'] leading-9">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-4">
            <FaFacebook className="text-[#331A15] text-[24px] cursor-pointer"/>
            <FaTwitter className="text-[#331A15] text-[24px] cursor-pointer"/>
            <FaInstagram className="text-[#331A15] text-[24px] cursor-pointer"/>
            <FaLinkedin className="text-[#331A15] text-[24px] cursor-pointer"/>
          </div>
          <ul>
            <h2 className="text-[#331a15] text-[25px] md:text-[45px] font-normal font-rancho mb-3">Get in Touch</h2>
            <div>
                <li className="flex items-center gap-4 font-relway text-[#1a1919]"><FaPhoneAlt className="text-[#331a15]" />+88 01533 333 333</li>
                <li className="flex items-center gap-4 font-relway text-[#1a1919]"><IoMdMail className="text-[#331a15]" />info@gmail.com</li>
                <li className="flex items-center gap-4 font-relway text-[#1a1919]"><IoLocationSharp className="text-[#331a15]" />72, Wall street, King Road, Dhaka</li>
            </div>
          </ul>
        </div>
        <div>
        <h2 className="text-[#331a15] text-[25px] md:text-[45px] font-normal font-rancho mb-4">Connect with Us</h2>
            <form className="flex flex-col gap-4">
                <input className=" lg:w-[503px] h-12 bg-white rounded-[5px] px-4 outline-[#331a15" type="text" name="name" id="name" placeholder="Name" required />
                <input className=" lg:w-[503px] h-12 bg-white rounded-[5px] px-4 outline-[#331a15"  type="email" name="email" id="email" placeholder="Email" required />
                <textarea className="resize-none p-4 outline-[#331a15]" name="message" id="message" rows={5} placeholder="Message" ></textarea>
                <button></button>
            </form>
        </div>
      </div>
      <div style={{backgroundImage: `url('${footerBg}')`}} className="w-full h-14 bg-center bg-no-repeat bg-cover flex justify-center items-center">
      <p className="text-white text-xl font-normal font-rancho">Copyright Espresso Emporium ! All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
