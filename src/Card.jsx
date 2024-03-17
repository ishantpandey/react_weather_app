import React, { useEffect, useState } from "react";
import './index.css';

function Card() {
  const[apidata,setapidata]=useState(null);
   const[city,setcity]=useState(" ");
   const addaction= async()=>{
     let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7f40a7595102633b575991d81ac826cd`
     const res = await fetch(url);
     const data = await res.json();
     console.log(data);
     setapidata(data);
     
     }
    
 
    useEffect(()=>{addaction();},[city]);
  
   return (
   <>
   <div className="container  ">
     <div className="row justify-content-center">
      <div className="col-md-6 col-sm-8 col-8  col-lg-4 mt-5   ">
       <div className="card p-3 content "  >
      <div className="header mt-5">
       <input type="text" placeholder="City Name"  onChange={(e)=>{setcity(e.target.value)}} />
      </div>
      {!(apidata) ?
    (  <>
     <div className="body mt-5">
       <div></div>
       <div></div>
     </div>
     <div className="mt-5"></div>
     <div className="footer mt-5 mb-5">
     <div></div>
      <div></div>
     </div>
     <div className="footer mt-5 mb-5">
     <div></div>
      <div></div>
     </div>
     <div className="mt-5 mb-2">Local Time : {new Date().toLocaleTimeString()}</div>
     </> ) :
    (
     <>
     <div className="body mt-5">
       {(apidata.main)?  <div>{apidata.main.temp} °C</div> : null }
      
       {(apidata.weather)?  <div>{(apidata.weather[0].main ==='Clear')? <span className="material-symbols-outlined icon1 ">
 sunny
 </span> : <span className="material-symbols-outlined icon2 ">
 cloud
 </span>} </div> : null }
     </div>
     {(apidata.main)?  <div className="mt-5">Feels Like: {apidata.main.feels_like} °C</div> : null }
    
     <div className="footer mt-5 mb-5">
     {(apidata.main)?  <div><span> Min :{Math.floor(apidata.main.temp_min)} °C</span></div> : null } 
     {(apidata.main)?   <div><span>Max :{Math.floor(apidata.main.temp_max)} °C</span></div> : null }
     
     </div>
     <div className="footer mt-3 mb-3">
     {(apidata.main)?   <div><span>Humidity : {apidata.main.humidity}</span></div> : null }
     {(apidata.sys)?   <div><span>Country : {apidata.sys.country} </span></div> : null }
     
     </div>
     <div className="mt-5 mb-2">Local Time : {new Date().toLocaleTimeString()}</div>
     </> 
          
          )
 }
 </div>
        
      </div>
     </div>
 
   </div>
   </>
   );
}

export default Card;