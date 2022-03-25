import React from "react"

export default function Card(props){
    return (
        <div className="card">
            <div className="cardContain1">
                <img className="cardImg" src={props.source}/>
            </div>
            <div className="cardContain2">
                <h4 className="cardState">{props.location}</h4>
                <h4 className="googleLink">View on Google Maps</h4>
                <h2>{props.destination}</h2>
                <h4 className="cardDate">{props.date}</h4>
                <p>{props.desc}</p>
            </div>
        </div>
    )
}

// "https://img.rezdy.com/PRODUCT_IMAGE/13699/IBENO2_lg.jpg"