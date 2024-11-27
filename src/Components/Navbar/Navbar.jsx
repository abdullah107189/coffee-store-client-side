import './navbar.css'
import logo from '../../assets/more/logo1.png'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-image text-white sticky top-0 z-50'>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-1">
                <div className=' flex items-center'>
                    <img className='w-12 h-auto' src={logo} alt="" />
                    <p className='rancho-regular text-3xl'>Espresso Emporium</p>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>Home</NavLink>
                        <NavLink to={'/allProducts'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>All Products</NavLink>
                        <NavLink to={'/addProducts'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>Add Products</NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar