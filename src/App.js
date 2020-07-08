import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import TeamA from './TeamA';
import TeamB from './TeamB';


function App() {
  let [isTheme, setTheme] = useState(true);

  return (
    <div className={`box ${isTheme ? 'box2' : ''}`}>
        <Header/>

       <button className="update"onClick={()=>setTheme(!isTheme)}>Update Theme</button>
       
       <TeamA></TeamA>
      
        <div className="break"></div>
        
       <TeamB></TeamB> 
      
   </div>
    
  );
}

export default App;
