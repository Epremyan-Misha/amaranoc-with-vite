import { inputsForFotter } from "../../DataBase";;
import "../index.css";
function Inputs(){
    return(
        <>
        <div className="mt-[100px] flex gap-[75px] ml-[60px]">
        {inputsForFotter.map(info=>(
        <input className="h-[50px] w-[250px] rounded-[15px] border border-white bg-[rgb(61,61,61)] text-white" type={info.type} placeholder={info.placeHolder} />     
        ))}
        <button className="text-white bg-[rgb(231,109,21)] rounded-[15px] w-[150px] ml-[-15px] cursor-pointer transition duration-[2000ms]">Ուղարկել</button>
        </div>
        </>
    )
}
export default Inputs;