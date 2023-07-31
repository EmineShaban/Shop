import './Filters.css';
import data from "../data.json"
import { useLocation } from "react-router-dom";
import ListOfProducts from './ListOfProducts';
import Product from './Product';

function Filters(targetE) {



   

    let arrData = []
    
        console.log(targetE)
        data.map((product, index) => {
            if (product.brand === targetE) {
                arrData.push(product)
            }
            console.log(arrData)
            
        })
        return <ListOfProducts sortArr={arrData} />
        // return <Product sortArr={arrData} />
 
    return (
        <div>

          
        </div>
    )
}


export default Filters;
