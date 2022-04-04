import React from 'react'
import './Weather.css'
export default function Weather (props) {
        function unixtotime(unix)
        {
                var date = new Date(unix * 1000);
                // Hours part from the timestamp
                var hours = date.getUTCHours().toString().padStart(2,0);
                var mins = date.getUTCMinutes().toString().padStart(2,0);
                var str = hours+':'+mins
                return str

        }
    function convertunixtoday(unix)
    {
        

        const milliseconds = unix * 1000 // 1575909015000

        const dateObject = new Date(milliseconds)

        // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15

        // dateObject.toLocaleString("en-US", {weekday: "long"}) 
        // console.log(dateObject.toLocaleString("en-US", {weekday: "long"}))
        return (dateObject.toLocaleString("en-US", {weekday: "long"}) )
    }
    // convertunixtoday(1649050200)
    // const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const dailyinfo=   props.dailydata.daily.map(i=>{
            // console.log(i)
          return(  <div className="forecast-details">

                <div className="day">
                        {convertunixtoday(i.dt)}
                </div>
                <div className="icon">
                        <img src={` http://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`} alt="" srcset="" />
                </div>
                         
                <div className="temp">
                        {float2int(i.temp.day)}°C
                </div>
        </div> 

    )})
    dailyinfo.shift()
    function float2int (value) {
            return value | 0;
    }
  return (
          <>
          {/* <div className="box"> */}

    <div className='Weather'>
        <div className="main-content">
                <div className="city">
                        {props.data.name}
                </div>
                <div className="summary">
                        {props.data.weather[0].main}
                </div>
                <div className="temparature">
                   {float2int(props.data.main.temp)}°C
                </div>

        </div>
         <div className="forecast">
            {/* <div className="forecast-details">

<div className="day">
Monday
</div>
<div className="icon">
</div>
<img src=' http://openweathermap.org/img/wn/10d@2x.png' alt="" srcset="" />
{` http://openweathermap.org/img/wn/10d@2x.png`} 
<div className="temp">
40°C
</div>
</div>  */}
        {dailyinfo}
     
    </div> 
    
    </div>
    <div className="description">
    Today:{props.data.weather[0].description}. The highest Temparature will be {float2int(props.data.main.temp_max)}°C and the lowest will be {float2int(props.data.main.temp_min)}°C
            </div>
           
            <div className="extras">

                    <div className="sunrise">
                        <div className="header">
                                Sunrise
                        </div>
                        <div className="content">
                                {unixtotime(props.data.sys.sunrise)}
                        </div>
                    </div>
                    <div className="sunset">
                    <div className="header">
                                Sunset
                        </div>
                        <div className="content">
                                {unixtotime(props.data.sys.sunset)}
                        </div>
                    </div>
                    <div className="dew">
                    <div className="header">
                                Dew Point
                        </div>
                        <div className="content">
                                {props.dailydata.current.dew_point}
                        </div>
                    </div>
                    <div className="humidity">
                    <div className="header">
                                Humidity
                        </div>
                        <div className="content">
                                {props.data.main.humidity}%
                        </div>
                    </div>
                    < div className="windspeed">
                    <div className="header">
                                WindSpeed
                        </div>
                        <div className="content">
                                {props.data.wind.speed}kmph
                        </div>
                    
                    </div>
                    <div className="feels_like">
                            <div className="header">
                                    Feels Like
                            </div>
                            <div className="content">

                                {props.data.main.feels_like}°C
                            </div>
                    </div>
                   
                    <div className="pressure">
                    <div className="header">
                                Pressure
                        </div>
                        <div className="content">
                                {props.data.main.pressure}hPa
                        </div>
                    
                    </div>
                         
                    <div className="visibility">
                    <div className="header">
                    Visibility 
                        </div>
                        <div className="content">
                                {(props.data.visibility)/1000}KM
                        </div>
                    </div>
                    <div className="uv">
                    <div className="header">
                                UV Index
                        </div>
                        <div className="content">
                                {props.dailydata.current.uvi}
                        </div>      
                    </div>
            </div>
                    
{/* </div> */}
        </>
  )
            
}
