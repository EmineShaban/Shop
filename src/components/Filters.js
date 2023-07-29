import './Filters.css';
import { Link } from "react-router-dom"

function Filters() {
    return (
        <div>

            <ul className='filters'>
                <li>
                    <Link to={'/'}><a>Home</a></Link>

                </li>
                <li>
                    <Link to={'/phone'}><a>Phone</a></Link>

                </li>
                <li>
                    <Link to={'/desktop'}><a>Desktop</a></Link>

                </li>
                <li>
                    <Link to={'/laptop'}><a>Laptop</a></Link>

                </li>
                <li>
                    <Link to={'/mouse'}><a>Mouse</a></Link>

                </li>
                <li>
                    <Link to={'/keyboard'}><a>Keyboard</a></Link>

                </li>
            </ul>
        </div>
    )
}


export default Filters;
