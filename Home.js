import React from "react";
import axios from 'axios';
import Imgcard from "./Imgcard";

const Home=()=>{
    const[search,setsearch]=React.useState("");
    const[data,setdata]=React.useState([]);
    const handler=e=>{
        setsearch(e.target.value);
    }

    React.useEffect(()=>{
        axios.get('https://api.coinstats.app/public/v1/coins?').then(
            res=>setdata(res.data.coins)
        )
    })
    return(
        <>
        <div className="header">
            <input value={search} placeholder="search for crypto" onChange={handler}/>
        </div>
        {
            data.length>0&&
            <div className="grid-container">
                {data.filter(crypto=>
                     crypto.name.toLowerCase().includes(search.toLocaleLowerCase())
                    )
                    .map(crypto=>
                    <div>
                        <Imgcard
                    name={crypto.name} rank={crypto.rank} price={crypto.price} marketCap={crypto.marketCap} key={crypto.id} url={crypto.icon}/> 
                    </div>
                    )}
            </div>
        }
        </>
    )
}

export default Home;