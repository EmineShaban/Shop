import './ListOfProducts.css';
 import { useState } from 'react';
 import Product from './Product';
import ListOfProducts from './ListOfProducts';

function Sort({data}) {
    const [selectedOption, setselectedOption] = useState('');

    if(selectedOption == 'Low'){
             data.sort((a, b) => (a.price > b.price)? 1 : -1)
             return <Product data={data}/>
         } else if(selectedOption == 'Az'){
            data.sort((a, b) => (a.title > b.title)? 1 : -1)

            return <Product data={data}/>
            // data.sort((a, b) => (b.price > a.price) ? 1 : -1)
    
         } else if(selectedOption == 'Az'){
            data.sort((a, b) => (a.title > b.title)? 1 : -1)

            return <Product data={data}/>
            // data.sort((a, b) => (b.price > a.price) ? 1 : -1)
    
         } 
         
    return (
        <div className='sort'>
        <div>

            <label for="sorting">Sort by: </label>
            <select name="sorting" id="sorting" value={selectedOption}
                onChange={e => setselectedOption(e.target.value)}>
                <option value="Az" selected>A-Z</option>
                <option value="Za"  >Z-A</option>
                <option value="Low" >Price low</option>
                <option value="High"  >Price high</option>
            </select>
        </div>    
          </div>



    )
}


export default Sort;
