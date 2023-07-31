import './ListOfProducts.css';
import data from '../data.json'
 import ListOfProducts from './ListOfProducts';

function Laptop() {
    let desktops = []
    data.map(data => {
        if (data.category === 'desktop') {
            desktops.push(data)
        }
        return desktops

    })

    return (
        <div>
            <ListOfProducts sortArr={desktops} />
        </div>
  )
}


export default Laptop;
