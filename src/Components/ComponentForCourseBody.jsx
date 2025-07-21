import "../index.css";
import { courses } from "../../DataBase";;
function Course(){
    return(
        <>
            <div className="flex ml-[5px] p-[10px]">
              <h4>Արժեք</h4>
              {courses.map(info => (
                  <p className="cursor-pointer w-[50px] m-[10px] h-[30px] border border-black rounded-[45px] text-center ml-[10px] transition duration-1000 hover:bg-[gainsboro]" key={info.id}>{info.title}</p>
              ))}
            </div>
        </>
    )
}
export default Course;