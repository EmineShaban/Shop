// import './Filters.css';
// import data from "../data.json"
// import { useLocation } from "react-router-dom";
// import ListOfProducts from './ListOfProducts';
// import FilterBrand from './FilterBrand';
// import Product from './Product';

// import { useState } from 'react';

// function Filters() {



//     const location = useLocation();
//     let nameLink = location?.pathname;
//     console.log(nameLink)

//     let categoryList = []
//     if (nameLink === '/') {
//         console.log('fff')
//         data.map((product, index) => {
//             if (!categoryList.includes(product.brand)) {

//                 categoryList.push(product.brand)
//             }
//             // console.log(categoryList)

//             return categoryList
//         }
//         )
//     } else if (nameLink === '/phone') {
//         data.map((product, index) => {
//             if (product.category === 'smartphones') {
//                 if (!categoryList.includes(product.brand)) {
//                     categoryList.push(product.brand)
//                 }
//                 return categoryList
//             }
//         }
//         )
//     }

//     let arrData = []
//     // const [item, setItem] = useState(Data);
//     const [selectedBrand, setselectedBrand] = useState('');

//     // function change(selectedOption) {
//         // console.log(e.target.value)
//         // let targetE = e.target.value
//         data.map((product, index) => { 
//         if(selectedBrand === product.brand){
//                 arrData.push(product)
//                 console.log(arrData)

                
//             }
//             return <FilterBrand data={arrData}/>

//         })
       
         

 

//      return (
//         <div>

//             <ul className='filters'>
//                 {categoryList.map((product, index) => (
//                     <div key={index} className="brand">
//                         <input type="checkbox" id="brand" name="brand" value={product} onChange={e => setselectedBrand(e.target.value)} />{product}
//                     </div>
//                 ))}


//             </ul>
//         </div>
//     )
// }


// export default Filters;
