import useProductsList from "../hooks/useProductsList"
import ProductCard from "./ProductCard"

const SimilarProducts = ()=>{
    const products = useProductsList()
    const scrollToTop = ()=>{
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
           });
    }

    if(!products) return null
    return(
        <div>
            <h2 className="font-medium text-xl py-4 px-2">Similar Products</h2>
            <div 
            onClick={scrollToTop}
            className="flex  gap-1">
            
            {products.map((prod) => (
            <div className="shrink-0" key={prod.id} >
                <ProductCard {...prod} 
            />
            </div>
          ))}
        </div>
        </div>
    )
}

export default SimilarProducts