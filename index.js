const api_key = 'b723180eadb010d7d249dd4f132a6bbc';


console.log('Hello Jee');

async function showWeather() {
    // let latitude = 15.3333;
    // let longitudde = 74.0833;

    let city = "goa";



    const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);

    const data = await responce.json();

    console.log("Weather Data : "+ data);
}