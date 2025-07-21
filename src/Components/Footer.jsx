import "../index.css";
import Inputs from "./ComponentForInputsFooter";
import { InfoH1Footer,InfoPFooter } from "./InfoForFooter";
function Footer(){
    return(
        <div className="h-[800px] bg-cover bg-no-repeat bg-center flex justify-center items-start pt-[300px]"  style={{ backgroundImage: "url('/photo/footer1.png')" }}>
            <div className="w-[80%] h-[400px] bg-[rgb(61,61,61)] rounded-[25px] ml-[50px]">
               <InfoH1Footer />
               <InfoPFooter />
                <Inputs />
            </div>
        </div>
    )
}
export default Footer;