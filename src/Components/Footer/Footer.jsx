import './footer.css'
import logo from '../../assets/more/logo1.png'
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
    return (
        <div className=''>
            <div className="bg-up-footer-image">
                <div className="max-w-[1440px] mx-auto px-4 md:pt-10 pt-5">
                    <img className='w-14' src={logo} alt="" />
                    <div className='grid grid-cols-2 gap-10 justify-between'>
                        <div>
                            <h1 className='rancho-regular text-3xl font-semibold text-shadow md:mb-8 mb-3 text-[#331A15]'>Espresso Emporium</h1>
                            <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>

                            {/* icons  */}
                            <div className="flex space-x-6 my-3 md:my-5">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className="w-8 h-8 text-[#331A15] hover:text-blue-600 transition-colors duration-300" />
                                </a>

                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaSquareXTwitter className="w-8 h-8 text-[#331A15] hover:text-[#1DA1F2] transition-colors duration-300" />
                                </a>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagramSquare className="w-8 h-8 text-[#331A15] hover:text-pink-500 transition-colors duration-300" />
                                </a>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="w-8 h-8 text-[#331A15] hover:text-blue-700 transition-colors duration-300" />
                                </a>
                            </div>


                            <h1 className='rancho-regular text-3xl font-semibold text-shadow md:mb-5 mb-3 text-[#331A15]'>Get in Touch</h1>
                            <p className='text-[#331A15] flex items-center mb-1'><span className='mr-3'><FaPhoneAlt /></span>239048509</p>
                            <p className='text-[#331A15] flex items-center mb-1'><span className='mr-3'><IoIosMail /></span>abdullah107189@gmail.com</p>
                            <p className='text-[#331A15] flex items-center md:mb-5 mb-3'><span className='mr-3'><FaLocationDot /></span>Rajshahi, Bangladesh</p>
                        </div>

                        <div>
                            <h1 className='rancho-regular text-3xl font-semibold text-shadow text-[#331A15] md:mb-8 mb-3'>Connect with Us</h1>

                            <div className="flex flex-col space-y-3 inputFiled md:mb-8 mb-5">
                                <input className='w-full p-3 rounded-md' type="text" placeholder='name' />
                                <input className='w-full p-3 rounded-md' type="email" name="" id="" placeholder='email' />
                                <textarea className='max-h-[200px] md:min-h-[100px] p-3' name="" id="" cols="10" rows="5"></textarea>
                                <button className='border-2 hover:border-white bg-transparent font-semibold hover:text-white transform duration-300 px-4 py-2 rounded-full hover:bg-[#E3B577] border-[#331a15] text-[#331a15] w-1/4 rancho-regular text-xl'>Sent Message</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-under-footer-image text-white">
                <p className="font-raleway max-w-[1440px] mx-auto px-4 text-center py-3">&copy; 2024 <strong>Abdullah 107189</strong>. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;