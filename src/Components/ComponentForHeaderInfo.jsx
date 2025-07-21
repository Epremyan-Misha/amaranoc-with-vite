import '../index.css';
import { infoForHeader, imgForHeader } from "../../DataBase";;

function HeaderInfo() {
    return (
        <>
            {infoForHeader.map((info, index) => (
                <h4 key={index} className="text-1xl mt-8 cursor-pointer hover:border-b-2 border-b-orange-500 h-7.5">{info.title}</h4>
            ))}
            {imgForHeader.map((img, index) => (
                <img key={index} className='w-8 h-8 mt-6 cursor-pointer' src={img.img} alt="icon"/>
            ))}
        </>
    );
}

export default HeaderInfo;
