import './banner.css'
import cup from '../../assets/icons/1.png'
import batch from '../../assets/icons/2.png'
import nut from '../../assets/icons/3.png'
import Bigcup from '../../assets/icons/4.png'
const Banner = () => {
    return (
        <div>
            {/* main banner  */}
            <div className='bg-home-image text-white'>
                <div className="max-w-[1440px] lg:py-[220px] md:py-[150px] mx-auto px-4  grid grid-cols-2">
                    <div></div>
                    <div className=' space-y-5'>
                        <h1 className='rancho-regular text-5xl'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='font-raleway'>It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='PriBtn'>Learn More</button>
                    </div>
                </div>

            </div>
            {/* under banner title  */}
            <div className='bg-[#ECEAE3]'>
                <div className='grid md:grid-cols-4 max-w-[1440px] m-auto px-4 py-3'>
                    <div className='p-4 space-y-1'>
                        <img className='w-12' src={cup} alt="" />
                        <h1 className='rancho-regular text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='p-4 space-y-1'>
                        <img className='w-12' src={batch} alt="" />
                        <h1 className='rancho-regular text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='p-4 space-y-1'>
                        <img className='w-12' src={nut} alt="" />
                        <h1 className='rancho-regular text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div className='p-4 space-y-1'>
                        <img className='w-12' src={Bigcup} alt="" />
                        <h1 className='rancho-regular text-2xl'>Awesome Aroma</h1>
                        <p className='font-raleway'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;