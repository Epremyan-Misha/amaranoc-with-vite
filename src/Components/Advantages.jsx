import "../index.css";
import { advanatagesH4,advanatagesText } from "../../DataBase";;
function AdvantagesMain(){
    return (
        <>
        <div>
            {advanatagesH4.map(info=>(
                <h4 className="ml-[30px] text-[rgb(46,46,46)] mt-[10px]">{info.h4}</h4>
            ))}
                    <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)] mt-[40px]">
                       {advanatagesText.map(info=>(
                        <p>{info.text}</p>
                       ))}
                    </div>
                  </div>
        </>
    )
}
export default AdvantagesMain;