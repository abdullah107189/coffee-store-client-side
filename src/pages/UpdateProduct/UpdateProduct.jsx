import { IoMdArrowBack } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import TextShadow from "../../hooks/TextShadow";
const UpdateProduct = () => {
    const LoadCoffeeData = useLoaderData()
    const navigate = useNavigate()
    const { _id, name, chef, price, taste, category, details, photo } = LoadCoffeeData;
    const handleUpdateBtn = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const chef = e.target.chef.value
        const price = e.target.price.value
        const taste = e.target.taste.value
        const category = e.target.category.value
        const details = e.target.details.value
        const photo = e.target.photo.value
        const coffeeData = { name, chef, price, taste, category, details, photo }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0) {
                    Swal.fire({
                        title: "Update Success!",
                        text: "Coffee update to the server!",
                        icon: "success"
                    });
                }
            })
    };
    return (
        <div className="bg-addProducts-image">
            <div className="md:py-10 py-5 max-w-[1440px] mx-auto px-4">
                <button
                    onClick={() => navigate(-1)}
                    className="outLinePriBtn flex gap-2 items-center hover:text-white">
                    <IoMdArrowBack className="w-7 h-7" />
                    Back
                </button>
                <div className="bg-[#F4F3F0] mt-5">
                    <div className="w-2/3 mx-auto text-center md:pt-10 pt-5">
                        <TextShadow text={'Update Existing Coffee Details'}></TextShadow>
                        <p className="mt-3">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <form
                            onSubmit={handleUpdateBtn}
                            className="md:p-16 p-10 w-full"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        defaultValue={name}
                                        type="text"
                                        name="name"
                                        placeholder="Enter coffee name"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Chef */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="chef">
                                        Chef
                                    </label>
                                    <input
                                        defaultValue={chef}
                                        type="text"
                                        name="chef"
                                        placeholder="Enter coffee chef"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* price */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="price">
                                        price
                                    </label>
                                    <input
                                        defaultValue={price}
                                        type="text"
                                        name="price"
                                        placeholder="Enter coffee price"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Taste */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="taste">
                                        Taste
                                    </label>
                                    <input
                                        defaultValue={taste}
                                        type="text"
                                        name="taste"
                                        placeholder="Enter coffee taste"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="category">
                                        Category
                                    </label>
                                    <input
                                        defaultValue={category}
                                        type="text"
                                        name="category"
                                        placeholder="Enter coffee category"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Details */}
                                <div>
                                    <label className="block text-sm font-medium mb-2" htmlFor="details">
                                        Details
                                    </label>
                                    <input
                                        defaultValue={details}
                                        type="text"
                                        name="details"
                                        placeholder="Enter coffee details"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Photo */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium mb-2" htmlFor="photo">
                                        Photo
                                    </label>
                                    <input
                                        defaultValue={photo}
                                        type="text"
                                        name="photo"
                                        placeholder="Enter photo URL"
                                        className="w-full p-3 focus:outline-none border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 w-full outLinePriBtn text-xl !py-2"
                            >
                                Update Coffee
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;