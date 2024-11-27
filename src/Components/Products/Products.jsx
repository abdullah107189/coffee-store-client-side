import TitleBar from "../TitleBar/TitleBar";
import cup1 from '../../assets/1.png'
import cup2 from '../../assets/2.png'
import cup3 from '../../assets/3.png'
import cup4 from '../../assets/4.png'
import cup5 from '../../assets/5.png'
import cup6 from '../../assets/6.png'
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const Products = () => {

    return (
        <div className="max-w-[1440px] mx-auto p-4">
            <TitleBar subTitle={'Sip & Savor'} title={'Our Popular Products'} btn={true}></TitleBar>
            <div className="md:my-10 my-5 grid grid-cols-2 gap-3 md:gap-5">
                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup1} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr. Matin Paul</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> 890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup2} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Black Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr.Nibra Sweden</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span>890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup3} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr. Matin Paul</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> 890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup4} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr. Matin Paul</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> 890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup5} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr. Matin Paul</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> 890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
                    <div className="">
                        <img src={cup6} alt="" />
                    </div>
                    <div className="flex items-center justify-between w-full">
                        <div className="md:space-y-3">
                            <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> Americano Coffee</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> Mr. Matin Paul</h1>
                            <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> 890 Taka</h1>
                        </div>
                        <div className="flex items-center flex-col gap-4">
                            <button><FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" /></button>
                            <button><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></button>
                            <button><MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;