import './navbar.css'
import logo from '../../assets/more/logo1.png'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import userLogo from '../../assets/profile.png';
import { AuthContext } from '../../provider/AuthProvider';
const Navbar = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className='bg-image text-white sticky top-0 z-50'>
            <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 py-1">
                <div className=' flex items-center'>
                    <img className='w-12 h-auto' src={logo} alt="" />
                    <p className='rancho-regular text-3xl'>Espresso Emporium</p>
                </div>
                <div className='flex items-center justify-between gap-5'>
                    <ul className='flex gap-5'>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>Home</NavLink>
                        <NavLink to={'/allProducts'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>All Products</NavLink>
                        <NavLink to={'/addProducts'} className={({ isActive }) => (isActive ? 'rancho-regular border-2 rounded-full transform duration-300 px-5 py-1 bg-[#E3B577] border-[#331a15] text-[#331a15] ' : 'PriBtn')}>Add Products</NavLink>
                    </ul>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-white btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={user ? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" : userLogo} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><button>{user ? 'logout' : 'login'}</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar