import { useState } from "react";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const AllProducts = () => {
    const [coffees, setCoffees] = useState([])
    fetch('http://localhost:5000/coffees')
        .then(res => res.json())
        .then(data => {
            setCoffees(data)
        })
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:py-10 py-5">
            <button>
                <Link to={'/'} className="outLinePriBtn flex gap-2 items-center hover:text-white">
                    <IoMdArrowBack className="w-7 h-7" />
                    Back to home
                </Link>
            </button>
            <div className="md:my-10 my-5 grid grid-cols-2 gap-3 md:gap-5">
                {
                    coffees.map(coffee => <Product coffee={coffee} key={coffee._id}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;