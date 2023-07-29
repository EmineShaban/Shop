import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';

function Laptop() {
    let desktops = []
    let lengthProducts = []

    const productPerRow = 6;

    data.map(data =>{
        console.log(data)
        if(data.category === 'desktop'){
            console.log(lengthProducts)

            lengthProducts.push(data)
            // return phones
        }
        return lengthProducts

    })


    const [next, setNext] = useState(productPerRow);

    const handleMoreProducts = () => {
        console.log('aaa')
        setNext(next + productPerRow);
      };

      console.log(data)

      lengthProducts.slice(0, next).map(data =>{
        console.log(data)
        if(data.category === 'desktop'){
            console.log(desktops)
             desktops.push(data)
        }
        return desktops

    })

  return (
    <div>
    <div className='list-of-product'>

   
    {desktops.map((desktop, index) =>(
         
     <div className='div-product' key={index}>

         
         <h3 className='title' >{desktop.title}</h3>
         <div className='product-img'> 
 
         <img src={desktop.thumbnail} alt="product"/>
         </div>
         <div className='price-stars'>
         <p className='price'>{desktop.price}$</p>
         <p>STARS</p>
         </div>
         <p className='descr'>{desktop.description}</p>
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
