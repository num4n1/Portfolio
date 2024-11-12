import MoneyWise from './assets/MoneyWise.png'
import "./stylesheets/Card.css";
function Card()  {
    return (
        <div className="card">
            <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
            <h2 className='card-title'>AI powered Finance tracker</h2>
        </div>

        
    );
}
export default Card;