$(".preloader").show()
let locat="lattlong="
navigator.geolocation.getCurrentPosition(success, error)
function success(pos) {

  var crd = pos.coords;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  locat=locat+Math.round(crd.latitude*100)/100+","+Math.round(crd.longitude*100)/100
  console.log(locat)
  console.log(`More or less ${crd.accuracy} meters.`);
  worldId(locat)
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}



let WeatherSucess=(data)=>{
    let currentWeather=data.consolidated_weather[0]
    console.log(currentWeather)
     let background=currentWeather.weather_state_abbr;
    $(`.background`).css("background-image" ,`url("Images/${background}.jpg")`)
    let mainTemp=`
    <div class="card text-center m-auto" style="width:25rem">
 
    <div class="title">
    <h3>${data.title} , ${data.parent.title}</h3>
  </div>
    <img src="https://www.metaweather.com/static/img/weather/png/${currentWeather.weather_state_abbr}.png" class="card-img-top current-img " alt="...">
    <div class="card-body ">
      <h2 class="card-title">${Math.round(currentWeather.the_temp*100)/100} &#8451;</h2>
      <h4 class="weather-state">${currentWeather.weather_state_name}</h4>
      <div class="elements row">
        <p class="col-md">Minimum temp : ${Math.round(currentWeather.min_temp*100)/100} &#8451;</p>
        <p class="col-md">Maximum Temp : ${Math.round(currentWeather.max_temp*100)/100} &#8451;</p>
        <p class="col-md">Wind Speed : ${Math.round(currentWeather.wind_speed*100)/100} km/hr</p>
        <p class="col-md">Visibility : ${Math.round(currentWeather.visibility*100)/100}</p>
        <p class="col-md">Humidity : ${Math.round(currentWeather.humidity*100)/100} %</p>
        <p class="col-md">Barometer : ${currentWeather.air_pressure} mb</p>
      </div>
    </div>
  </div>`
    $(`.target`).html(mainTemp)
    $(`.target`).show()
    $(`.error`).addClass(`none`)
    
  
}
let worldId=(place)=>{
    $(".preloader").show()
    let woiedval
    let query
    if(place.includes("lattlong"))
    query=place
    else
    query=`query=${place}`
    let locationapi=`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/search/?${query}`
    const getWeatherId = async ()=>{
        console.log("Fetching The Data.....")
        const data1= await fetch (locationapi)  
        console.log("Fetching on process..")
        const datason= await data1.json()
        console.log("Fetch Completed...")
        return datason
    }
    getWeatherId().then((data)=>{
        woiedval= data[0].woeid
        console.log(`The id of ${place } is ${woiedval} `)
        let weatherUrl=`https://api.allorigins.win/raw?url=https://www.metaweather.com/api/location/${woiedval}/`
        const getWeatherInfo=async ()=>{
            console.log("Fetching the Weather Details")
            const data1= await fetch (weatherUrl)  
            console.log("Fetching on process..")
            const datason= await data1.json()
            console.log("Fetch Completed...")
            return datason
        }
        getWeatherInfo().then((data)=>{
            $(".preloader").hide()
            console.log(data)
            WeatherSucess(data)
        }).catch(()=>{
            console.log("Sorry facing trouble in fetching weather of ",place)
        })

        }).catch(()=>{
          $(`.target`).hide()
          $(`.error`).removeClass(`none`)
          $(`.preloader`).hide()
            console.log("Sorry facing trouble in fetching the Weather ID")
        })
    }


$(`.submit`).on("click",(e)=>{
  console.log("Clicked")
  e.preventDefault()
let val=$(`.searchCity`).val()
console.log("This is ",val)
if(val=="")
alert(`No city name given`)
else{
  worldId($(`.searchCity`).val())
  $(`.searchCity`).val("")
}
})

$(`.navbar-brand`).on("click",()=>{
  location.reload()
})
function reloadNow(){
 location.reload();
}