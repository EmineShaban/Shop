import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';

function Laptop() {
    let keyboards = []
    let lengthProducts = []

    const productPerRow = 6;

    data.map(data =>{
         if(data.category === 'keyboard'){
            lengthProducts.push(data)
         }
        return lengthProducts

    })


    const [next, setNext] = useState(productPerRow);

    const handleMoreProducts = () => {
         setNext(next + productPerRow);
      };

 
      lengthProducts.slice(0, next).map(data =>{
         if(data.category === 'keyboard'){
             keyboards.push(data)
        }
        return keyboards

    })

  return (
    <div>
    <div className='list-of-product'>

   
    {keyboards.map((keyboard, index) =>(
         
     <div className='div-product' key={index}>

         
         <h3 className='title' >{keyboard.title}</h3>
         <div className='product-img'> 
 
         <img src={keyboard.thumbnail} alt="product"/>
         </div>
         <div className='price-stars'>
         <p className='price'>{keyboard.price}$</p>
         <p>STARS</p>
         </div>
         <p className='descr'>{keyboard.description}</p>
         <br/>
         <div className='div-order'>
 
         <button className='order'>ORDER NOW</button>
         </div>
     </div>
    ))}
 
 
 
 </div>

<div className='load-more-div'>

{next < lengthProducts.length && (
<button className="load-more" onClick={handleMoreProducts} >Load more</button>

)}
</div>
</div>
  )
}


export default Laptop;
