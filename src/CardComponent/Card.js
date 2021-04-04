import "./Card.css"
import CardText from "./CardText";
import illustration from "../images/illustration-woman-online-desktop.svg";
import shadow from "../images/bg-pattern-desktop.svg"
import box from "../images/illustration-box-desktop.svg"



const Card = ()=>{
    return(
        <div>
            <div className="Card">
                <img src={illustration} alt="Logo" className="illustration"/>
                <img src={shadow} alt="Logo" className="shadow"/>
                <img src={box} alt="Logo" className="box"/>
                <CardText />
            </div>
        </div>
    )
}

export default Card