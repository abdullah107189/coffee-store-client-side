
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto px-4">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;