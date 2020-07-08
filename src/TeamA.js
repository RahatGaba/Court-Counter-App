import React,{useState} from 'react'

export default function TeamA()
 {
     let [countA, setCountA] = useState(0);
    return (
        <div className="split left">
           <div className="centered">
               <div className="Team"><h3>Team A</h3></div>
           <div className="result"> {countA}</div>
            <br/>
            <button className= "PointButton" onClick={()=>setCountA(countA+3)}>+3 POINTS</button>
            <br/>
            <button className= "PointButton" onClick={()=>setCountA(countA+2)}>+2 POINTS</button>
            <br/>
            <button className= "PointButton" onClick={()=>setCountA(countA+1)}>FREE THROW</button>
            </div> 
        </div>
    )
}
