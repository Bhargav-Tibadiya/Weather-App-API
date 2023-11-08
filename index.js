const userTab =  document.querySelector("[data-userWeather]");
const serachTab =  document.querySelector("[data-searchWeather]");
const userContainer =  document.querySelector(".weather-container");

const grantAccessController= document.querySelector("grant-location-container");
const searchForm = document.querySelector(".data-searchForm");







































// const api_key = 'cb690d983d68ef169ff9bbc5201fb01d';


// console.log('Hello Jee');

// async function showWeather() {

//     try {
//         let latitude = 15.3333;
//         let longitudde = 74.0833;

//         let city = "Goa";


//         const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
//         console.log("Responce get");
    
//         const data = await responce.json();
//         console.log("Converted to JSON");
    
//         console.log("Weather Data : ", data);
    
//         let newPara = document.createElement('p');
//         newPara.textContent= ` ${data?.main?.temp.toFixed(2)} °C`;
//         document.body.appendChild(newPara);
        
//     } catch (error) {
//         console.log(error);   
//     }
// }

// async function getCustomWeather(){
//     let latitude = 15.6333;
//     let longitude = 18.3333;

//     let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
//     let data = await responce.json(); 

//     console.log(data);   
// }