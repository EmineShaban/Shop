import './Filters.css';
import data from "../data.json"
import { useLocation } from "react-router-dom";
import ListOfProducts from './ListOfProducts';
import FilterBrand from './FilterBrand';

function Filters() {



    const location = useLocation();
    let nameLink = location?.pathname;
    console.log(nameLink)

    let categoryList = []
    if (nameLink === '/') {
        console.log('fff')
        data.map((product, index) => {
            if (!categoryList.includes(product.brand)) {

                categoryList.push(product.brand)
            }
            // console.log(categoryList)

            return categoryList
        }
        )
    } else if (nameLink === '/phone') {
        data.map((product, index) => {
            if (product.category === 'smartphones') {
                if (!categoryList.includes(product.brand)) {
                    categoryList.push(product.brand)
                }
                return categoryList
            }
        }
        )
    }

    let arrData = []
    function change(e) {
        console.log(e.target.value)
        let targetE = e.target.value
        // data.map((product, index) => {
        //     if (product.brand === e.target.value) {
        //         arrData.push(product)
        //     }
        //     console.log(arrData)
            
        //     return <ListOfProducts sortArr={arrData} />
        // })
        return <FilterBrand target={targetE} />
    }

    return (
        <div>

            <ul className='filters'>
                {categoryList.map((product, index) => (
                    <div key={index} className="brand">
                        <input type="checkbox" id="brand" name="brand" value={product} onClick={change} />{product}
                    </div>
                ))}


            </ul>
        </div>
    )
}


export default Filters;
