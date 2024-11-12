import MoneyWise from './assets/MoneyWise.png'
import "./stylesheets/Card.css";
function Card()  {
    return (
        <div className='card-container'>
            <div className="card">
                <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
                <h2 className='card-title'>AI powered Finance tracker</h2>
            </div>
            <div className="card">
                <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
                <h2 className='card-title'>AI powered Finance tracker</h2>
            </div>
            <div className="card">
                <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
                <h2 className='card-title'>AI powered Finance tracker</h2>
            </div>
            <div className="card">
                <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
                <h2 className='card-title'>AI powered Finance tracker</h2>
            </div>
            <div className="card">
                <img className="card-image"src={MoneyWise} alt="MoneyWise"></img>
                <h2 className='card-title'>AI powered Finance tracker</h2>
            </div>
            
        </div>
        

        
    );
}
export default Card;