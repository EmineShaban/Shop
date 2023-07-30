import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';
import ListOfProducts from './ListOfProducts';

function Laptop() {
    let laptops = []
    data.map(data => {
        if (data.category === 'laptops') {
            laptops.push(data)
        }
        return laptops

    })

    return (
        <div>
            <ListOfProducts sortArr={laptops} />
        </div>
    )
}


export default Laptop;
