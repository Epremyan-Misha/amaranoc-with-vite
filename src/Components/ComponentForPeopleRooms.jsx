import "../index.css";
import { firstPeopleRooms,secondPeopleRooms,lastPeopleRooms,h4PeopleRooms } from "../../DataBase";;
function PeopleRooms(){
    return(
        <>
          <div className="h-[270px] border-b border-b-[1px] border-b-[rgb(233,231,231)]">
            {h4PeopleRooms.map(info=>(
                <h4 className="ml-[30px] text-[rgb(46,46,46)]">{info.h4}</h4>
            ))}
            <div className="flex">
                {firstPeopleRooms.map(info=>(
                    <p className="cursor-pointer m-[10px] text-center ml-[10px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(93,53,53)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]">{info.num}</p>
                ))}
            </div>
            <div className="flex">
                 {secondPeopleRooms.map(info=>(
                    <p className="cursor-pointer m-[10px] text-center ml-[10px] mt-[-5px] w-[70px] h-[45px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000">{info.num}</p>
                ))}
            </div>
            {lastPeopleRooms.map(info=>(
                <div className="cursor-pointer text-center ml-[10px] w-[80px] h-[65px] border border-[rgb(179,177,177)] text-[rgb(107,105,105)] bg-white p-[15px] rounded-[25px] transition duration-1000 hover:bg-[gainsboro]">{info.num}</div>
            ))}
          </div>
        </>
    )
}
export default PeopleRooms;