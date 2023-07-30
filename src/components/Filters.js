import './Filters.css';
import { Link } from "react-router-dom"
import data from "../data.json"
import { useLocation } from "react-router-dom";


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
            console.log(categoryList)

            return categoryList
        }
        )
    }


    function change(e) {
        console.log(e.target.value)
    }

    return (
        <div>

            <ul className='filters'>
                {categoryList.map((product, index) => (
                    <div className="brand">
                        <input type="checkbox" id="brand" name="brand" value={product} onClick={change} />{product}
                    </div>
                ))}


            </ul>
        </div>
    )
}


export default Filters;
