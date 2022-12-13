import "./Card.css"
import Button from "../Button/Button"

export default function Card({image,title,description,price}){
    return (
        <div className="Card-container">
            <div className="Card-content">
            <div className="Card-image">
            <img alt="" src={image}></img>
            </div>
            <div className="Card-title"> 
            <h3>{title}</h3>
            </div>
            <div className="Card-description"> 
            <p>{description}</p>
            <p>{price}</p>
            </div>
            <div className="Card-button">
            <Button text="Detalle" url="http://google.com"/>
            <Button text="Comprar" url="http://google.com"/>
            </div>
            </div>
        </div>
    )
}