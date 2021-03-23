import "./CardText.css"
import {useState} from "react"
import {Data} from "./Data"
import {IconContext} from "react-icons";
import Arrow from "../images/icon-arrow-down.svg"


const CardText = ()=>{
    const [clicked, setClicked] = useState(false)

    const toggle = (index) =>{
        if(clicked === index){
            return setClicked(null)
        }
        return setClicked(index)
    }

    return(
        <div className="CardText">
            <div className="CardHeader">
                FAQ
            </div>
            <div className="CardBody">
                <IconContext.Provider value={{ color: "black", size: "25px"}}>
                    <div>
                        <div className="container">
                            {Data.map((item, index)=>{
                                return(<>
                                        <div className="wrap" onClick={() => toggle(index)} key={index}>
                                            <div className="question_header">
                                            <div className="question">{item.question}</div>
                                            <span>{clicked === index
                                                ? <img src={Arrow} style={{width: "20px", height:"13px",}}/>
                                                : <img src={Arrow} style={{width: "20px", height:"13px", transform: "rotate(90deg)"}}/>
                                            }
                                            </span>
                                            </div>
                                            {clicked === index ? (
                                                <div className="answer">
                                                    <p>{item.answer}</p>
                                                </div>
                                            ) : null}
                                        </div>
                                </>)
                            })}
                        </div>
                    </div>
                </IconContext.Provider>
            </div>
        </div>

    )
}

export default CardText