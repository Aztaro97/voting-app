import React from 'react'
import { FaCaretUp } from 'react-icons/fa'
import "../styles/candidat.css"

const Candidat = (props) => {
    return (
            <div className="Contener mb-1">
                <div className="Item">
                    <div className="" style={{width:"200px"}}>
                        <img className="img-fluid"  src={props.urlImage} alt=""/>
                    </div>
                    <div className="itemRight">
                        <a>
                            <i className="upBtn" onClick={props.handleVote.bind(this, props.id)}><FaCaretUp /></i> {props.vote}
                        </a>
                        <h3> {props.name} </h3>
                        <p>{props.title}</p>
                    </div>
                </div>
            </div>
    )
}

export default Candidat;