import React from "react";

const Imgcard=(props)=>{
    return(
        <div>
            <>
            <img src={props.url} alt={props.name}/>
            <p style={{color:"orange", "fontWeight":"bold"}}>{props.name}</p>
            <p>Rank {props.rank}</p>
            <p>Price is {props.price}</p>
            <p>Marketcap {props.marketCap}</p>
            </>
        </div>
    )
}


export default Imgcard;