const container =document.querySelector('.container')
const search = document.querySelector('.search')
const weatherBox = document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')
const error404 = document.querySelector('.not-found')

search.addEventListener('click',()=>{
    const APIKey ='9da95def8e52eee10d8996fbdbf4478e'
    const city =document.querySelector('.search-box input').value

    if(city==='')
    {
        return;
    }
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json=>{
    if(json.cod==='404'){
        container.style.height='400px'
        weatherBox.style.display='none'
        weatherDetails.style.display='none'
        error404.style.display='block'
        error404.classList.add('fadeIn')
        return;
    }
    error404.style.display='none'
    error404.classList.remove('fadeIn')

    const image =document.querySelector('.weather-box img')
    const temprature =document.querySelector('.weather-box .temprature')
    const description = document.querySelector('.weather-box .description')
    const humidity = document.querySelector('.weather-box .humanity')
    const wind = document.querySelector('.weather-box .wind')
    

 })
})