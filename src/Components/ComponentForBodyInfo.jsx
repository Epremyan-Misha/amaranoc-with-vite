import "../index.css";
import { infoHouseForBody } from "../../DataBase";;
function BodyInfo(){
    return (
        <>
         <h3 className="ml-6 mt-3.5">Տարածաշրջան</h3>
        <div className="border-b border-b-[rgb(233,231,231)] border-b-[1px]">
            <div className="cursor-pointer ml-[25px] text-[rgb(75,74,74)]">
             {infoHouseForBody.map(info => (
    <p key={info.id}>{info.name}</p>
))}
            </div>
            </div>
        </>
    )
}
export default BodyInfo;