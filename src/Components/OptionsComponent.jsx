import "../index.css";
import ProductCard from "./ProductCards";
import { productsImg } from "../../DataBase";;
function Options(){
    return(
        <>
         <div className="flex ml-[-580px] w-[1050px] h-[120px] mt-[50px] border-b border-b-[1px] border-b-[rgb(196,193,193)] border-t border-t-[1px] border-t-[rgb(196,192,192)]">
                  <div className="cursor-pointer ml-[15px] mt-[15px]">
                    <img className="ml-[25px]" src="photo/nkar 1.png" />
                    <p style={{ borderBottom: "solid 3px rgb(255, 123, 0)" }}>
                      Առանձնատներ
                    </p>
                  </div>
                  {productsImg.map(info=>(
                  <ProductCard title={info.title} image={info.image} />
                  ))}
                </div>
        </>
    )
} 
export default Options;