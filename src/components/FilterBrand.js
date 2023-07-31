import './Filters.css';
import data from "../data.json"
import { useLocation } from "react-router-dom";
import ListOfProducts from './ListOfProducts';
import Product from './Product';

function FilterBrand(arrData) {
 
    let dataF = []
    
        console.log(arrData)
        data.map((product, index) => {
            if (product.brand === arrData) {
                dataF.push(product)
            }
            console.log(dataF)
            
        }) 
        
    return (
        <div>
           
        <Product data={dataF} />
    

</div>
    )
}


export default FilterBrand;
