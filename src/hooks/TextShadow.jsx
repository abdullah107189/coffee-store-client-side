const TextShadow = ({ text, mb = false }) => {
    return (
        <div>
            <h1 className={`rancho-regular text-3xl font-semibold text-shadow ${mb ? 'md:mb-8 mb-3' : <></>}  text-[#331A15]`}>{text}</h1>
        </div >
    );
};

export default TextShadow;