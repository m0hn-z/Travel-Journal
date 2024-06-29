import React from "react";
import './Card.css'
export default function Card(props){
    return (
        <>
        <div className="card">
            <div className="image-holder">
            <img src={props.img} alt="" />
            </div>
           
            <div className="info">
            <div className="location">
            <i class="fa-solid fa-location-dot"></i>
            <p>{props.location}</p>
            <a href={props.link} target="_blank">View on Google</a> 
            </div>
            <h1>{props.name}</h1>
            <h4>{props.from} - {props.to}</h4>
            <p>{props.desc}</p>
            </div>
        </div>
            <hr />
        </>
    )
}