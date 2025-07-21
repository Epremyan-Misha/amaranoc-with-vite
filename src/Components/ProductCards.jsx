import "../index.css"
function ProductCard({title,image}){
    return(
        <>
        <div className="cursor-pointer p-[10px] ml-[40px]">
        <img className="productCardImg" src={image} alt={title}/>
        <p className="mt-[15px]">{title}</p>
        </div>
        </>
    )
}
export default ProductCard;