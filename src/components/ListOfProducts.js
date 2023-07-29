import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';
import Sort from './Sort';
function ListOfProducts() {

    const productPerRow = 6;
    const arrData= []
    // data.map((product, index) => {

    //     arrData.push(product)
    //     console.log(data)
    // }

    // )

    const [next, setNext] = useState(productPerRow);
    const handleMoreProducts = () => {
        console.log('aaa')
        setNext(next + productPerRow);
    };

    return (
        <div>
            <div>
                <div className='name'>
                    <h1>ALL PRODUCTS</h1>
                </div>
                <div className='sort'>
                  <Sort data={data}/>
                </div>

            </div>
            <div className='list-of-product'>


                {data.slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button className='order'>ORDER NOW</button>
                        </div>
                    </div>
                ))}

            </div>
            <div className='load-more-div'>

                {next < data.length && (
                    <button className="load-more" onClick={handleMoreProducts} >Load more</button>

                )}
            </div>

        </div>
    )
}


export default ListOfProducts;
