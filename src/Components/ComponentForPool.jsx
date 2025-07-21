import "../index.css";
import { firstTextPool,secondTextPool,lastTextPool,h4ForPool } from "../../DataBase";;
function Pool(){
    return (
        <>
         <div className="border-b border-b-[1px] border-b-[rgb(233,231,231)] h-[260px]">
            {h4ForPool.map(info=>(
                <h4 className="ml-[30px] text-[rgb(46,46,46)]">{info.h4}</h4>
            ))}
                <div className="flex">
                {firstTextPool.map(info=>(
                     <p className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[80px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000">{info.text}</p>
                ))}
            </div>
            <div className="flex">
                {secondTextPool.map(info=>(
                    <p className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[120px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000">{info.text}</p>
                ))}
            </div>
            {lastTextPool.map(info=>(
                <div className="cursor-pointer text-center ml-[10px] w-[130px] h-[65px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]">{info.text}</div>
            ))}
          </div>
        </>
    )
}
export default Pool;