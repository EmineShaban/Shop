import './ListOfProducts.css';
import { useState } from 'react';
import { useLocation } from "react-router-dom";

import './Product.css';

function Product({ data }) {

    const productPerRow = 6;

    console.log(data)

    const location = useLocation();
    let nameLink = location?.pathname;
    console.log(nameLink)


    function order() {
        alert('Product added to cart')
    }



    const [next, setNext] = useState(productPerRow);
    const handleMoreProducts = () => {
        console.log('aaa')
        setNext(next + productPerRow);
    };




    const [selectedOption, setselectedOption] = useState('Az');

    if (selectedOption === 'Low') {
        data.sort((a, b) => (a.price > b.price) ? 1 : -1)
    } else if (selectedOption === 'High') {
        data.sort((a, b) => (b.price > a.price) ? 1 : -1)

    } else if (selectedOption === 'Az') {
        data.sort((a, b) => (a.title > b.title) ? 1 : -1)

    } else if (selectedOption === 'Za') {
        data.sort((a, b) => (b.title > a.title) ? 1 : -1)

    }



    const [selectedBrand, setselectedBrand] = useState('');

    let categoryList = []

    console.log(selectedBrand)

    if (selectedBrand === '') {
        console.log('a')
        data.map((product, index) => {
            if (!categoryList.includes(product.brand)) {
                categoryList.push(product.brand)
                return data
            }
            return categoryList
        })
    } else {

        data.map((product, index) => {
            if (!categoryList.includes(product.brand)) {
                categoryList.push(product.brand)
                data = data.filter(pr => pr.brand === selectedBrand)
                return data
            }


            return categoryList
        }
        )


    }


    let priceFilter = [
        {
            "id": 1,
            "price": "$0-$200",
        },
        {
            "id": 2,
            "price": "$200-$500",
        },
        {
            "id": 3,
            "price": "$500-$1000",
        },
        {
            "id": 4,
            "price": '$1000-$1500',
        },
        {
            "id": 5,
            "price": 'over $1500',
        },
    ]

    const [selectedPrice, setselectedPrice] = useState('');

    if (nameLink) {
        let minNum = Number.MAX_VALUE;
        let maxNum = Number.MIN_VALUE;

        data.map((product, index) => {
            const min = Math.min(product.price)
            if (minNum > min) {
                minNum = min
            }
            if (maxNum < min) {
                maxNum = min
            }
             
        })

        console.log(minNum)
        console.log(maxNum)

        if (minNum >= 1500) {
            console.log('1')
            priceFilter.splice(0, 4)

        } else if (minNum >= 1000) {
            console.log('2')

            priceFilter.splice(0, 3)

        } else if (minNum >= 500) {
            console.log('3')

            priceFilter.splice(0, 2)

        } else if (minNum >= 200) {
            console.log('4')

            priceFilter.splice(0, 1)

        }



        if (maxNum <= 200) {
            priceFilter.splice(1, 4)

            console.log('11')

        } else if (maxNum <= 500) {
            priceFilter.splice(2, 3)

            console.log('22')

        } else if (maxNum <= 1000) {
            priceFilter.splice(3, 2)

            console.log('33')

        } else if (maxNum <= 1500) {
            priceFilter.splice(4, 1)

            console.log('44')

        }



    }

    if (selectedPrice === '$0-$200') {


         data = data.filter(pr => pr.price < 200)
        console.log(data) 

    } else if (selectedPrice === '$200-$500') {
        data = data.filter(pr => pr.price < 500 && pr.price > 200)

    } else if (selectedPrice === '$500-$1000') {
        data = data.filter(pr => pr.price < 1000 && pr.price > 500)

    } else if (selectedPrice === '$1000-$1500') {
        data = data.filter(pr => pr.price < 1500 && pr.price > 1000)

    } else if (selectedPrice === 'over $1500') {
        data = data.filter(pr => pr.price > 1500)

    }




    return (
        <div className='filterProduct'>
            <div className='filterDiv'>
                <ul className='filters'>
                    <li>Brand Filter</li>
                    {categoryList.sort((a, b) => (a > b) ? 1 : -1).map((product, index) => (
                        <div key={index} className="brand">
                            <input type="radio" id="dewey" name="drone" value={product}
                                onChange={e => setselectedBrand(e.target.value)} />{product}
                        </div>
                    ))}

                    <li>Price Filter</li>
                    {priceFilter.map((product, index) => (
                        <div key={index} className="brand">
                            <input type="radio" id="dewey" name="drone" value={product.price}
                                onChange={e => setselectedPrice(e.target.value)} />{product.price}
                        </div>
                    ))}

                </ul>
            </div>
            <div className='productDiv'>

                <div className='name-sort'>
                    {nameLink === '/' ?
                        <div className='name'>
                            <h1>ALL PRODUCTS</h1>
                            <p>Choose your product!</p>
                        </div>
                        : nameLink === '/phone' ?
                            <div className='name'>
                                <h1>PHONE</h1>
                                <p>Choose your phone!</p>
                            </div>
                            : nameLink === '/desktop' ?
                                <div className='name'>
                                    <h1>desktop</h1>
                                    <p>Choose your desktop!</p>
                                </div>
                                : nameLink === '/mouse' ?
                                    <div className='name'>
                                        <h1>mouse</h1>
                                        <p>Choose your mouse!</p>
                                    </div>
                                    : nameLink === '/keyboard' ?
                                        <div className='name'>
                                            <h1>keyboard</h1>
                                            <p>Choose your keyboard!</p>
                                        </div>
                                        : <div className='name'>
                                            <h1>laptop</h1>
                                            <p>Choose your laptop!</p>
                                        </div>
                    }


                    <div className='sort'>

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

                <div className='list-of-product'>


                    {data.slice(0, next).map((product, index) => (

                        <div className='div-product' key={index}>


                            <h3 className='title' >{product.title}</h3>
                            <div className='product-img'>

                                <img src={product.thumbnail} alt="product" />
                            </div>
                            <div className='price-stars'>
                                <p className='price'>{product.price}$</p>
                                <p>Raiting {product.rating} ★</p>
                            </div>
                            <p className='descr'>{product.description}</p>
                            <br />
                            <div className='div-order'>

                                <button onClick={order} className='order'>ORDER NOW</button>
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
        </div>


    )
}


export default Product;
