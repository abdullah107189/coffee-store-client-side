import { IoMdArrowBack } from "react-icons/io";
import TextShadow from "../../hooks/TextShadow";
const AddProducts = () => {
    return (
        <div className="md:my-10 py-5 max-w-[1440px] mx-auto px-4">
            <button className="outLinePriBtn flex gap-2 items-center hover:text-white">
                <IoMdArrowBack className="w-7 h-7" />
                Back to home
            </button>
            <div className="bg-[#F4F3F0] text-center">
                <div className="w-2/3 mx-auto md:p-20 p-10">
                    <TextShadow mb={true} text={'Add New Coffee'}></TextShadow>
                    <p className="text-[#1B1A1AB3]/70">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="grid grid-cols-2">

                </form>
            </div>
        </div>
    );
};

export default AddProducts;