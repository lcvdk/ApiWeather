let API_KEY = prompt('Please Enter your API Key ( get one from api.openweathermap.org ) :')
let ville = 'Paris'
getWeather(ville);

function getWeather(ville){
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${API_KEY}&units=metric`;
  
  //requete def + envoi
  let cityWeather = new XMLHttpRequest();
  cityWeather.open('GET', url);
  cityWeather.responseType ='json';
  cityWeather.send();

  //requete reception
  cityWeather.onload = () => {
    if(cityWeather.readyState === XMLHttpRequest.DONE){
      if(cityWeather.status === 200) {
        let cityWeatherResponse = cityWeather.response;
        console.log(cityWeatherResponse);
        document.getElementById("ville").innerHTML = `${ville} (${cityWeatherResponse.sys.country}) <img src="https://flagsapi.com/${cityWeatherResponse.sys.country}/flat/32.png"></img>`
        document.getElementById("temperature_label").innerText = cityWeatherResponse.main.temp
      } else {
        console.log(cityWeather);
        alert(`Un problème est survenu, code d'erreur: ${cityWeather.response.cod}, ${cityWeather.response.message}`)
        
      }
    }
  }
}

document.getElementById("changer").addEventListener('click', ()=>{
  ville = prompt("quelle est la ville choisie?");
  getWeather(ville);
})
