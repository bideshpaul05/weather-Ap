import React from 'react'
import './Search.css'
import Weather from './Weather';
import errorimg from './error.png'
import loader from './welcome.png'
export default function Search() {

    const [data,setdata]= React.useState([]);
    const [dailydata,setdailydata]= React.useState([]);
    const [loading,setloading]=React.useState(true);
    const [cityname,setcityname] = React.useState('');
    const [error,seterror] = React.useState(false)

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=4ba04993946d5cf3d89f5a32e27516ea&&units=metric`
    // const dailyurl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=4ba04993946d5cf3d89f5a32e27516ea&&units=metric`
 function calldailyApi(lat,lon)
 {
    fetch( `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=4ba04993946d5cf3d89f5a32e27516ea&&units=metric`)

    .then((response) => {return response.json()}
        )
    .then(function(res){

        setdailydata(res)
        
        setloading(false)
        // seterror(false)
        console.log('im called')

        // res.cod == 200 ? seterror(false) : seterror(true)

        // console.log(res.cod)
        // console.log(res)
        
        // console.log(dailydata)
    })
}
 function currentApi()
 {
    fetch(url)
    .then((response) => {
        if (response.ok) {
            // setloading(true);
          return response.json();
        }
        console.log(error)
        throw new Error('Something went wrong');
      })
    .then(function(res){

        setdata(res)
        
        // setloading(false)
        seterror(false)
         
        // res.cod == 200 ? seterror(false) : seterror(true)
         calldailyApi(res.coord.lat,res.coord.lon)
        console.log(data)
        console.log(res.cod)
        console.log(res)
        console.log(error+"curent")

        
       
    })
    .catch(err=>seterror(true))
 }
 function callApi(){
   currentApi()
   

  
}
 function handleChange(e)
 {   var city = e.target.value
     setcityname(city);
     
 }
 if(loading===false && error===false)
 {
  return (
        <>
    <div className="search">
        <div className="search-area">
        <input type="text" id='search-bar' placeholder='Enter a City' onChange={handleChange}/>
            <button id="submit-btn"type="submit" onClick={callApi}>Search</button>
        </div>

    </div>
  
    
       
            <Weather data={data} dailydata={dailydata}/>
        
    
    
        </>
  )
}

else if(loading){
    return (
        <>
    <div className="search">
        <div className="search-area">
        <input type="text" id='search-bar' placeholder='Enter a City' onChange={handleChange}/>
            <button id="submit-btn"type="submit" onClick={callApi}>Search</button>
        </div>

    </div>
    <div className="loader">
            <img src={loader} alt="" srcset="" id='loader' />
            <div className="message">
                Welcome to WeatherApp
                <p></p>
                (If it is your first time using or using after a reload; if nothing shows up after you search the please check your spelling of the city)
            </div>
    </div>
  
    
       
            
        
    
    
        </>
  )
    }

else if(error===true)
{
    return (
        <>
    <div className="search">
        <div className="search-area">
        <input type="text" id='search-bar' placeholder='Enter a City' onChange={handleChange}/>
            <button id="submit-btn"type="submit" onClick={callApi}>Search</button>
        </div>

    </div>
  
    <div className="eror">
        <img src={errorimg} alt="" srcset="" id='errorimg'/>
        <div className="message">
            Something Went wrong
        </div>
    </div>
       
            {/* <Weather data={data}/> */}
        
    
    
        </>
  )
}
// else {
//     return(
//         <div className="search">
//         <div className="search-area">
//         <input type="text" id='search-bar' placeholder='Enter a City' onChange={handleChange}/>
//             <button id="submit-btn"type="submit" onClick={callApi}>Search</button>
//         </div>

//     </div>
//     )
// }
}