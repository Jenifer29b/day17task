const rootdiv = document.createElement("div")
rootdiv.setAttribute("class", "container")
console.log(rootdiv)

const text = ("RESTCOUNTRIES USING FETCH");
const heading = document.createElement("h1")
heading.setAttribute("class", "text-center")
heading.setAttribute("id", "title")
heading.innerHTML = text;
rootdiv.appendChild(heading)
console.log(heading)


const div = document.createElement("div")
div.setAttribute("class", "row")

rootdiv.appendChild(div)

const div2 = document.createElement("div")
div2.setAttribute("class", " col-sm-6 col-md-4 col-lg-4 col-xl-4 ")
div.appendChild(div2)

const div3 = document.createElement("div")
div3.setAttribute("class", "card h-100")
div2.appendChild(div3)

const div4 = document.createElement("div")
div4.setAttribute("class", "card-header")
let text1 = ("name")
const heading1 = document.createElement("h4")
heading1.setAttribute("class", "text-white bg-dark text-center")
heading1.innerHTML = text1;
div4.appendChild(heading1)
div3.appendChild(div4)


const img = document.createElement("img")
img.setAttribute("class", "card-img-top")
let txt = ("flag")
img.innerHTML = txt;
div4.appendChild(img)

const div5 = document.createElement("div")
div5.setAttribute("class", "card-body")
const text2 = ("subregion")
const text3 = ("Country-code")
const text4 = ("latlng")
const heading2 = document.createElement("h5")
const heading3 = document.createElement("h5")
const heading4 = document.createElement("h5")
heading2.innerHTML = text2;
heading3.innerHTML = text3;
heading4.innerHTML = text4;
div5.appendChild(heading2)
div5.appendChild(heading3)
div5.appendChild(heading4)
div4.appendChild(div5)


const div6 = document.createElement("div")
div6.setAttribute("class", "card-text")
const text5 = ("region")
const text6 = ("Capital")
const text7 = ("population")
const heading5 = document.createElement("h5")
const heading6 = document.createElement("h5")
const heading7 = document.createElement("h5")
heading5.innerHTML = text5;
heading6.innerHTML = text6;
heading7.innerHTML = text7;
div6.appendChild(heading5)
div6.appendChild(heading6)
div6.appendChild(heading7)
div5.appendChild(div6)


const getWeatherBtn = document.createElement("button")
getWeatherBtn.setAttribute("class", "btn btn-primary")
const txt1 = ("click for weather")
getWeatherBtn.innerHTML = txt1;
const weatherDisplay = document.createElement("p")
weatherDisplay.setAttribute("class", "text-center")
getWeatherBtn.appendChild(weatherDisplay)
div6.appendChild(getWeatherBtn) 


document.body.appendChild(rootdiv)


const apiUrl = "https://raw.githubusercontent.com/PugazharasanC/rest-api/main/countriesV3.1.json";

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {

    data.map((country) => {

      const myArray = [
        heading1.innerHTML = ` ${country.name.common}`,
      img.src = ` ${country.flags.png}`,
      heading2.innerHTML = `SubRegion: ${country.subregion}`,
      heading3.innerHTML = `Country Code: ${country.cca2}`,
      heading4.innerHTML = `latlng: ${country.latlng}`,
      heading5.innerHTML = `Region: ${country.region}`,
      heading6.innerHTML = `Capital: ${country.capital}`,
      heading7.innerHTML = `Popuation: ${country.population}`
      ];
      for (let i = 0; i < myArray.length; i++) {
        console.log(`Element ${i + 1}: ${myArray[i]}`);
      }
      console.log(myArray)


    });
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });


  
  
getWeatherBtn.addEventListener("click", async () => {
    const country1 = heading1.innerHTML
    const apiKey = "838dd31baf0c93377a592bd8c85d98f5"; 

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country1}&appid=${apiKey}`);
        const data = await response.json();

        // Extract relevant weather information (e.g., temperature, humidity, wind speed)
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;

        // Display the weather information
        weatherDisplay.innerHTML = `
            <p>Temperature: ${temp}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind Speed: ${windSpeed} m/s</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        weatherDisplay.innerHTML = "Error fetching weather data. Please try again.";
    }
});
