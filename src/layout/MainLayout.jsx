
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div className='max-w-[1920px] mx-auto font-raleway'>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;