import "../index.css";
import homeImages from "../../DataBase";;
function Houses(){
    return (
 <>
 <div className="mt-[150px] grid grid-cols-3 gap-[40px] p-[30px]">
  {homeImages.map((img) => (
    <div className="h-auto">
      <div className=" cursor-pointer transition duration-500 flex flex-col items-start rounded-[25px] p-[10px] shadow-[2px_2px_4px_black] w-full max-w-[310px] hover:w-[312px] hover:h-[365px]">
        <img className="ml-[-5px] rounded-[5px] w-[310px] transition duration-500 hover: w-[320px]" src={img.image} alt={img.title} />
        <div className="flex">
          <p className="mt-[10px]">{img.title}</p>
          <img className="h-[25px] mt-[14px] ml-[140px]" src="photo/iconPeople.png" />
          <p className="ml-[25px] mt-[10px]">{img.people}</p>
        </div>
        <p className="text-xl text-[rgb(156,155,155)] transition duration-500 hover:text-black-500 mt-[15px]">{img.prace}</p>
      </div>
    </div>
  ))}
</div>
</>
    )
}
 export default Houses;