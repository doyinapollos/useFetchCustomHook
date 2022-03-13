import React from "react";
import {Link} from "react-router-dom"

export default function Card(props) {

    
    return (
        
            <div className="display--card">
                <Link to={`/post/${props.id}`}>
                    <div className="card">
                        <div className="card--img--div">
                        <img className="card--img" src="https://apilist.fun/images/social/api/jsonplaceholder.png" alt="" /> 
                        </div>
                        <span className="card--name">{props.title}</span>
                        { /*<span className="card--dsc">{props.dsc}</span> */}
                        {/* <span className="card--price">price: {props.price}</span> */}
                        {/* <span className="card-rating">rating: {props.rate}</span> */}
                        <span className="card--country"> {props.body}</span>

                    </div>
                    </Link>

            </div>
            
        
    )
}