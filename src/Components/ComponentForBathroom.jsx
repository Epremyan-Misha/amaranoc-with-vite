import "../index.css";
import { firstBathroom,lastBathroom,h4Bathroom } from "../../DataBase";;
function BathRoom(){
    return (
        <>
         <div className="border-b border-b-[1px] border-b-[rgb(233,231,231)] h-[210px]">
             {h4Bathroom.map(info=>(
                           <h4 className="ml-[30px] text-[rgb(46,46,46)]">{info.h4}</h4>
                       ))}
            <div className="flex">
                 {firstBathroom.map(info=>(
                          <p className="cursor-pointer m-[10px] text-center ml-[10px] mt-[25px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000">{info.num}</p>  
                       ))}
               
            </div>
             {lastBathroom.map(info=>(
                        <div className="cursor-pointer text-center ml-[10px] w-[80px] h-[60px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]">{info.num}</div>
                       ))}
            
          </div>
          </>
    )
}
export default BathRoom;