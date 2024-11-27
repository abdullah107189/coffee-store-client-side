import loadingImage from '../../assets/loadingImage.gif'
const Loading = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <img className='w-[200px] h-full' src={loadingImage} alt="" />
            <h1 className='rancho-regular mt-3 text-3xl font-bold'>Loading ...</h1>
        </div>
    );
};

export default Loading;