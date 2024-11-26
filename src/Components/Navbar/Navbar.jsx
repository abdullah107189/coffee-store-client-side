import './navbar.css'
import logo from '../../assets/more/logo1.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-image text-white '>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-1">
                <div className=' flex items-center'>
                    <img className='w-12 h-auto' src={logo} alt="" />
                    <p className='rancho-regular text-3xl'>Espresso Emporium</p>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <Link to={'/'} className='PriBtn'>Home</Link>
                        <Link to={'/'} className='PriBtn'>About</Link>
                        <Link to={'/'} className='PriBtn'>Contact</Link>
                        <Link to={'/'} className='PriBtn'>All Product</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar