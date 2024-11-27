import { GiCoffeeCup } from "react-icons/gi";
import TextShadow from '../../hooks/TextShadow';

const TitleBar = ({ subTitle, title, btn = false }) => {
    return (
        <div className='md:my-10 my-5 mxa-w-[1440px] mx-auto flex flex-col items-center space-y-2'>
            <p>--- {subTitle} ---</p>
            <TextShadow text={title}></TextShadow>
            {btn && <button className='outLinePriBtn flex items-center gap-2 '>Add Coffee <GiCoffeeCup className="w-7 h-7" /></button>}
        </div >
    );
};

export default TitleBar;