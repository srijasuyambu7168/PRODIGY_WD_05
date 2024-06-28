const weatherData = {
    Mumbai: { temperature: 22, description: 'Rainy', windSpeed: 15 },
    Delhi: { temperature: 25, description: 'Cloudy', windSpeed: 5 },
    Bangalore: { temperature: 22, description: 'Rainy', windSpeed: 15 },
    Chennai: { temperature: 32, description: 'Sunny', windSpeed: 8 },
    Kolkata: { temperature: 28, description: 'Humid', windSpeed: 12 },
    Hyderabad: { temperature: 27, description: 'Clear', windSpeed: 7 }
};

document.getElementById('get-weather-btn').addEventListener('click', () => {
    const citySelect = document.getElementById('city-select');
    const selectedCity = citySelect.value;

    if (selectedCity) {
        const weatherInfo = weatherData[selectedCity];

        document.getElementById('city-name').innerText = `Weather of ${selectedCity}`;
        document.getElementById('temperature').innerText = `Temperature: ${weatherInfo.temperature} °C`;
        document.getElementById('description').innerText = `Sky Conditions: ${weatherInfo.description}`;
        document.getElementById('wind-speed').innerText = `Wind Speed: ${weatherInfo.windSpeed} km/h`;

        document.getElementById('weather-info').style.display = 'block';
    } else {
        alert('Please select a city.');
    }
});
