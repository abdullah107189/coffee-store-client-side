import { useEffect, useState } from "react";
import Product from "../../Components/Product/Product";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Loading from "../../Components/Loading/Loading";
import Swal from "sweetalert2";

const AllProducts = () => {
    const [coffees, setCoffees] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => {
                setCoffees(data)
            })
    }, [])
    const handleDeleteCoffee = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = coffees.filter(coffee => coffee._id !== id)
                            setCoffees(remaining)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })

            }
        });
    }
    return (
        <div className="max-w-[1440px] mx-auto px-4 md:py-10 py-5">
            <button>
                <Link to={'/'} className="outLinePriBtn flex gap-2 items-center hover:text-white">
                    <IoMdArrowBack className="w-7 h-7" />
                    Back to home
                </Link>
            </button>
            {
                coffees !== null ?
                    < div className="md:my-10 my-5 grid grid-cols-2 gap-3 md:gap-5">
                        {
                            coffees?.map(coffee => <Product
                                coffee={coffee}
                                key={coffee._id}
                                handleDeleteCoffee={handleDeleteCoffee}
                            ></Product>)
                        }
                    </div>
                    :
                    <Loading></Loading>
            }

        </div >
    );
};

export default AllProducts;