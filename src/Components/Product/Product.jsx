import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Product = ({ coffee, handleDeleteCoffee }) => {
    const { _id, name, chef, price, photo } = coffee;
    return (
        <div className="flex items-center lg:gap-10 md:gap-5 gap-3 ga lg:px-10 md:px-8 px-5 md:py-5 py-3 border rounded-lg bg-[#F5F4F1]">
            <div className="">
                <img src={photo} alt="" />
            </div>
            <div className="flex items-center justify-between w-full">
                <div className="md:space-y-3">
                    <h1 className="text-[#331A15]"><span className="font-semibold">Name:</span> {name}</h1>
                    <h1 className="text-[#331A15]"><span className="font-semibold">Chef:</span> {chef}</h1>
                    <h1 className="text-[#331A15]"><span className="font-semibold">Price:</span> {price}</h1>
                </div>
                <div className="flex items-center flex-col gap-4">
                    <button>
                        <FaEye className="w-7 h-7 bg-[#D2B48C] text-white p-1 rounded-sm" />
                    </button>
                    <button>
                        <Link to={`/updateCoffee/${_id}`}><FaPen className="w-7 h-7 bg-[#3C393B] text-white p-1 rounded-sm" /></Link>
                    </button>
                    <button onClick={() => { handleDeleteCoffee(_id) }}>
                        <MdDelete className="w-7 h-7 bg-[#EA4744] text-white p-1 rounded-sm" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;