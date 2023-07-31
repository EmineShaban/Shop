import './ListOfProducts.css';
import data from '../data.json'
 import Product from './Product';
 
 
 function ListOfProducts({ sortArr }) {
console.log(sortArr)
    const productPerRow = 6;
    const arrData = []
 

if(sortArr === undefined || sortArr === [] ){

    data.map((product, index) => {

        arrData.push(product)

        return arrData
    }
    )
}else{
    sortArr?.map((product, index) => {

        arrData.push(product)

        return arrData
    }
    )
}
    return (
        <div>
                <Product data={arrData} />
        </div>
    )
}


export default ListOfProducts;
