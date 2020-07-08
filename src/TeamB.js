import React,{useState} from 'react'

export default function TeamB()
 {
     let [countB, setCountB] = useState(0);
    return (
        <div className="split right">
           <div className="centered">
               <div className="Team"><h3>Team B</h3></div>
            <div className="result"> {countB}</div>
            <button className= "PointButton" onClick={()=>setCountB(countB+3)}>+3 POINTS</button>
            <br/>
            <button className= "PointButton" onClick={()=>setCountB(countB+2)}>+2 POINTS</button>
            <br/>
            <button className= "PointButton" onClick={()=>setCountB(countB+1)}>FREE THROW</button>
            </div>
        </div>
    )
}
